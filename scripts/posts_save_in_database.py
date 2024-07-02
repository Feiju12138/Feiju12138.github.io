import os
import sqlite3
import hashlib
import datetime
import base64

"""
将所有文章保存到数据库，为了让Elasticsearch导入
"""

# 数据表名
table_name = "posts"
# 切换到项目根目录路径
os.chdir("../../")
base_dir = os.getcwd()
# 中文文章文件名列表
post_filename_list = os.listdir(f"{base_dir}/source/_posts/")
# 数据库文件
database_file = f"{base_dir}/source/scripts/data.db"

# 遍历文件名
for post_filename in post_filename_list:
    if post_filename == "未完待更":
        continue
    if post_filename == ".DS_Store":
        continue
    # print(post_filename)

    # 获取文件绝对路径
    file_src = f"{base_dir}/source/_posts/{post_filename}"
    # print(file_src)
    filename_without_suffix = post_filename.replace(".md", "")

    # 计算文件名的MD5
    filename_md5 = hashlib.md5(post_filename.encode("utf-8")).hexdigest()
    # print(f"filename_md5: {filename_md5}")

    # 获取文件修改时间
    updated_at = os.path.getmtime(file_src)
    updated_at = datetime.datetime.fromtimestamp(int(updated_at)).isoformat()
    # print(f"updated_at: {updated_at}")

    # 读取文件
    with open(file_src) as f:
        # 读取整篇文章
        content_all = f.read()
        content = content_all[content_all.find("## 前言"):]
        content = base64.b64encode(content.encode('utf-8'))
        content = str(content,'utf-8')
        # print(f"content: {content}")
    with open(file_src) as f:
        # 读取所有行
        line_list = f.readlines()
        for line in line_list:
            if line.startswith("title: "):
                title = line.replace("title: ", "").strip()
                title = base64.b64encode(title.encode('utf-8'))
                title = str(title,'utf-8')
                # print(f"title: {title}")
            elif line.startswith("sticky: "):
                sticky = line.replace("sticky: ", "").strip()
                # print(f"sticky: {sticky}")
            elif line.startswith("lang: "):
                lang = line.replace("lang: ", "").strip()
                # print(f"lang: {lang}")
            elif line.startswith("date: "):
                date = line.replace("date: ", "").strip()
                created_date = datetime.datetime.strptime(date, "%Y-%m-%d %H:%M:%S")
                created_at = created_date.isoformat()
                # print(f"created_at: {created_at}")
                break

    month = "%02d" % created_date.month
    day = "%02d" % created_date.day
    path = f"/{created_date.year}/{month}/{day}/{filename_without_suffix}"
    path = base64.b64encode(path.encode('utf-8'))
    path = str(path,'utf-8')
    print(f"path: {path}")

    # 连接数据库
    conn = sqlite3.connect(database_file)
    cur = conn.cursor()
    # 写入数据库
    # print(f"-- REPLACE INTO {table_name} VALUES('{filename_md5}', '{title}', '{lang}', {sticky}, '{path}', '{content}', '{created_at}', '{updated_at}')")
    cur.execute(f"REPLACE INTO {table_name} VALUES('{filename_md5}', '{title}', '{lang}', {sticky}, '{path}', '{content}', '{created_at}', '{updated_at}')")
    conn.commit()
    # 关闭数据库连接
    cur.close()
    conn.close()

# 连接数据库
conn = sqlite3.connect(database_file)
cur = conn.cursor()
# 查询数据库中所有的数据
cur.execute(f"SELECT filename_md5 FROM {table_name}")
result_list = cur.fetchall()
# 关闭数据库连接
cur.close()
conn.close()
# 获取数据库中的所有文件名MD5列表
filename_md5_in_database_list = []
for result in result_list:
    filename_md5_in_database_list.append(result[0])
# print("数据库中的文件名MD5值", filename_md5_in_database_list)

# 获取磁盘中的所有文件名列表
filename_in_disk_list = post_filename_list
# print("磁盘中的文件名MD5值", filename_in_disk_list)

# 获取磁盘中的所有文件名MD5列表
filename_md5_in_disk_list = []
for filename_in_disk in filename_in_disk_list:
    # 计算文件名MD5值
    filename_md5_in_disk = hashlib.md5(filename_in_disk.encode("utf-8")).hexdigest()
    filename_md5_in_disk_list.append(filename_md5_in_disk)


"""
清理数据库中多余的记录
"""

# 遍历数据库中所有文件的MD5值列表，将所有数据库中存在但是磁盘中不存在数据删除
for filename_md5_in_database in filename_md5_in_database_list:
    if filename_md5_in_database not in filename_md5_in_disk_list:
        print("数据库中多余文件名MD5值", filename_md5_in_database)
        # 连接数据库
        conn = sqlite3.connect(database_file)
        cur = conn.cursor()
        # 删除数据
        cur.execute(f"DELETE FROM {table_name} WHERE filename_md5='{filename_md5_in_database}'")
        # 提交SQL
        conn.commit()
        # 关闭数据库连接
        cur.close()
        conn.close()
        print("删除了数据库中的数据:", filename_md5_in_database)

