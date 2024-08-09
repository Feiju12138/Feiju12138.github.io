/**
 * 渲染Aplayer播放器
 */

// const music_path = `https://cdn.jsdelivr.net/gh/feiju12138/blog-aplayer-music@latest`;
const music_path = "/dist/aplayer";

const ap = new APlayer({
    container: document.getElementById("aplayer"),
    lrcType: 1,
    listFolded: true,
    order: "random",
    audio: [
        {
            name: "出山",
            artist: "花粥&王胜娚",
            url: `${music_path}/media/出山.mp3`,
            cover: "http://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg",
            lrc: `
                [ti:出山]
                [ar:花粥&王胜娚]
                [al:粥请客（四）]
                [by:FeiJu]
                [00:11.38]在夜半三更过天桥
                [00:13.88]从来不敢回头看
                [00:16.24]白日里是车水马龙
                [00:18.55]此时脚下是忘川
                [00:20.85]我独自走过半山腰
                [00:23.22]山间野狗来作伴
                [00:25.59]层林尽染百舸流
                [00:27.89]秋风吹过鬼门关
                [00:30.20]一瞬三年五载 品粗茶 食淡饭
                [00:34.93]六界八荒四海 无人与我来叫板
                [00:39.60]人间荒唐古怪 竹林外 有书斋
                [00:44.21]匿于此地畅快 偏来者不善善者不来
                [00:51.12]是我装模作样在瞎掰
                [00:55.35]还是他们本就心怀鬼胎
                [00:58.23]有人不知悔改 迷雾中混淆黑白
                [01:02.90]在情怀里市侩 旁人不敢来拆穿
                [01:07.25]看似时来运转 实则在顶风作案
                [01:12.18]待曲终又人散 这一出还有谁在围观
                [01:16.79]在凡尘修炼二十载听闻水能滴石穿
                [01:21.40]帝王豪杰风云变幻敌不过桑田沧海
                [01:26.13]我不关心谁的江山只眷恋两小无猜
                [01:30.87]兴风作浪不稀罕只身固守峨眉山
                [01:35.22]一瞬三年五载 品粗茶 食淡饭
                [01:40.08]六界八荒四海 无人与我来叫板
                [01:44.69]人间荒唐古怪 竹林外 有书斋
                [01:49.30]匿于此地畅快 偏来者不善善者不来
                [01:55.83]是我装模作样在瞎猜
                [02:00.50]还是他们本就心怀鬼胎
                [02:03.38]有人不知悔改 迷雾中混淆黑白
                [02:08.05]在情怀里市侩 旁人不敢来拆穿
                [02:12.66]看似时来运转 实则在顶风作案
                [02:17.33]待曲终又人散 这一出还有谁在围观
                [02:21.94]静悄悄配唠唠叨叨
                [02:24.37]随便瞧瞧我凑凑热闹
                [02:26.74]客串也别太潦草
                [02:28.98]吃的生蚝要蘸个酱料
                [02:31.35]悄悄你唠唠叨叨
                [02:33.65]随便瞧瞧你凑的热闹
                [02:36.02]听到你做个记号
                [02:38.07]请装进书包别四处招摇
                [02:40.44]有人迷途知返
                [02:45.04]便是苦尽甘来
                [02:49.91]一瞬三年五载
                [02:54.64]这曲终又人散
            `
        },
        {
            name: "帝都",
            artist: "萌萌哒天团",
            url: `${music_path}/media/帝都.mp3`,
            cover: "https://img1.kuwo.cn/star/albumcover/500/5/45/88655059.jpg",
            lrc: `
                [ti:帝都]
                [ar:萌萌哒天团]
                [al:帝都]
                [by:FeiJu]
                [00:20.00]空荡的宫殿 冰冷的庄严
                [00:24.60]上弦月弹奏清歌奄奄
                [00:29.08]谁看到悲的烟 金杯玉盏
                [00:33.88]却无人叹息生锈的剑
                [00:38.68]往日故友寻难见 只剩思念
                [00:43.48]拂尘掠过空间
                [00:48.28]有谁来读这孤独感 散不尽留恋
                [00:53.21]生死注定烟消云散
                [00:57.89]想曾经往日昨天 孤独是晴天
                [01:02.75]和曾经诺言的竹签
                [01:27.20]空荡的宫殿 冰冷的庄严
                [01:31.61]上弦月弹奏清歌奄奄
                [01:36.22]谁看到悲的烟 金杯玉盏
                [01:41.09]却无人叹息生锈的剑
                [01:45.82]往日故友寻难见 只剩思念
                [01:50.62]拂尘掠过空间
                [01:55.42]有谁来读这孤独感 散不尽留恋
                [02:00.22]生死注定烟消云散
                [02:05.09]想曾经往日昨天 孤独是晴天
                [02:09.76]和曾经诺言的竹签
                [02:14.69]有谁来读这孤独感 散不尽留恋
                [02:19.49]生死注定烟消云散
                [02:24.22]想曾经往日昨天 孤独是晴天
                [02:29.09]和曾经诺言的竹签
                [02:33.89]和曾经诺言的竹签
            `
        },
        {
            name: "广寒宫",
            artist: "丸子呦",
            url: `${music_path}/media/广寒宫.mp3`,
            cover: "https://img3.kuwo.cn/star/albumcover/500/36/54/948405199.jpg",
            lrc: `
                [ti:广寒宫]
                [ar:丸子呦]
                [al:广寒宫]
                [by:FeiJu]
                [00:27.45]午夜时分月上枝头谁为谁心疼
                [00:32.00]一杯浊酒浇在心头谁让谁心冷
                [00:36.48]置身混沌唯唯诺诺还诚惶诚恐
                [00:41.08]阴差阳错天地分别谁成了英雄
                [00:44.99]广寒宫阙之中
                [00:47.29]锁着她的寂寞
                [00:49.53]桂树花印霓虹
                [00:51.77]管他雕梁画栋
                [00:54.01]只愿晨鼓暮钟
                [00:56.25]化作一丝温柔
                [00:58.56]云涛翻涌苍穹
                [01:00.80]是她遗恨相思愁
                [01:03.36]云母屏风花烛映影深
                [01:08.09]幻影成茧奈何奴身不由己几分
                [01:12.64]长河渐落破晓陨星沉
                [01:17.18]玉兔金蟾助我药成再伴吾君身
                [01:39.84]午夜时分月上枝头谁为谁心疼
                [01:44.32]一杯浊酒浇在心头谁让谁心冷
                [01:48.86]置身混沌唯唯诺诺还诚惶诚恐
                [01:53.40]阴差阳错天地分别谁成了英雄
                [01:57.37]广寒宫阙之中
                [01:59.68]锁着她的寂寞
                [02:01.85]桂树花印霓虹
                [02:04.09]管他雕梁画栋
                [02:06.40]只愿晨鼓暮钟
                [02:08.64]化作一丝温柔
                [02:11.00]云涛翻涌苍穹
                [02:13.18]是她遗恨相思愁
                [02:16.06]云母屏风花烛映影深
                [02:20.54]幻影成茧奈何奴身不由己几分
                [02:25.08]长河渐落破晓陨星沉
                [02:29.56]玉兔金蟾助我药成再伴吾君身
                [02:52.22]云母屏风花烛映影深
                [02:56.70]幻影成茧奈何奴身不由己几分
                [03:01.31]长河渐落破晓陨星沉
                [03:05.85]玉兔金蟾助我药成再伴吾君身
            `
        },
        {
            name: "红昭愿",
            artist: "音阙诗听-王梓钰",
            url: `${music_path}/media/红昭愿.mp3`,
            cover: "http://p1.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg",
            lrc: `
                [ti:红昭愿]
                [ar:音阙诗听-王梓钰]
                [al:红昭愿]
                [by:FeiJu]
                [00:18.94]手中雕刻生花
                [00:21.12]刀锋千转蜿蜒成画
                [00:23.23]盛名功德塔
                [00:24.64]是桥畔某处人家
                [00:27.45]春风绕过发梢红纱
                [00:29.44]刺绣赠他
                [00:31.29]眉目刚烈拟作妆嫁
                [00:35.39]轰烈流沙枕上白发
                [00:37.56]杯中酒比划
                [00:39.68]年少风雅鲜衣怒马
                [00:41.72]也不过一刹那
                [00:43.84]难免疏漏儿时檐下
                [00:45.88]莫测变化
                [00:47.93]隔却山海
                [00:49.60]转身从容煎茶
                [01:08.67]一生长
                [01:09.47]重寄一段过往
                [01:11.42]将希冀都流放
                [01:13.34]可曾添些荒唐
                [01:15.07]才记得你的模样
                [01:16.80]一身霜
                [01:17.76]谁提笔只两行
                [01:19.80]换一隅你安康
                [01:21.79]便销得这沧桑
                [01:23.39]你还在我的心上
                [01:42.77]手中雕刻生花
                [01:44.50]刀锋千转蜿蜒成画
                [01:46.64]盛名功德塔
                [01:48.11]是桥畔某处人家
                [01:50.86]春风绕过发梢红纱
                [01:52.91]刺绣赠他
                [01:54.72]眉目刚烈拟作妆嫁
                [01:58.88]轰烈流沙枕上白发
                [02:00.99]杯中酒比划
                [02:03.17]年少风雅鲜衣怒马
                [02:05.22]也不过一刹那
                [02:07.27]难免疏漏儿时檐下
                [02:09.31]莫测变化
                [02:11.49]隔却山海
                [02:12.90]转身从容煎茶
                [02:15.42]一生长
                [02:16.38]重寄一段过往
                [02:18.24]将希冀都流放
                [02:20.16]可曾添些荒唐
                [02:21.82]才记得你的模样
                [02:23.61]一身霜
                [02:24.51]谁提笔只两行
                [02:26.56]换一隅你安康
                [02:28.60]便销得这沧桑
                [02:30.20]你还在我的心上
                [02:32.06]一生长
                [02:32.96]重寄一段过往
                [02:34.88]将希冀都流放
                [02:36.99]可曾添些荒唐
                [02:38.46]才记得你的模样
                [02:40.32]一身霜
                [02:41.15]谁提笔只两行
                [02:43.26]换一隅你安康
                [02:45.31]便销得这沧桑
                [02:46.84]你还在我的心上
            `
        },
        {
            name: "芒种",
            artist: "音阙诗听&赵方婧",
            url: `${music_path}/media/芒种.mp3`,
            cover: "http://p1.music.126.net/KFWbxh1ZLyy9WR77Ca08tA==/109951164866828786.jpg",
            lrc: `
                [ti:芒种]
                [ar:音阙诗听&赵方婧]
                [al:二十四节气]
                [by:FeiJu]
                [00:01.18]一想到你我
                [00:02.39]就
                [00:04.70]空恨别梦久
                [00:07.13]Wu
                [00:09.50]烧去纸灰埋烟柳
                [00:33.55]于鲜活的枝丫
                [00:36.05]凋零下的无暇
                [00:38.35]是收获谜底的代价
                [00:42.39]余晖沾上
                [00:43.79]远行人的发
                [00:45.59]他洒下手中牵挂
                [00:49.43]于桥下
                [00:51.54]前世迟来者（擦肩而过）
                [00:54.65]掌心刻（来生记得）
                [00:56.49]你眼中烟波滴落一滴墨
                [00:59.82]Wo
                [01:01.67]若佛说（无牵无挂）
                [01:04.04]放下执着（无相无色）
                [01:06.60]我怎能
                [01:07.31]波澜不惊
                [01:08.20]去附和
                [01:10.70]一想到你我就
                [01:12.77]Wu
                [01:14.50]恨情不寿
                [01:15.27]总于苦海囚
                [01:16.61]Wu
                [01:18.98]新翠徒留
                [01:19.69]落花影中游
                [01:21.48]Wu
                [01:23.78]相思无用
                [01:24.55]才笑山盟旧
                [01:26.21]Wu
                [01:29.80]谓我何求
                [01:39.77]谓我何求
                [01:43.03]种一万朵莲花
                [01:45.59]在众生中发芽
                [01:47.96]等红尘一万种解答
                [01:51.93]念珠落进
                [01:53.33]时间的泥沙
                [01:55.13]待割舍诠释慈悲的读法
                [02:01.14]前世迟来者（擦肩而过）
                [02:03.75]掌心刻（来生记得）
                [02:06.57]你眼中烟波滴落一滴墨
                [02:09.51]Wo
                [02:11.37]若佛说（无牵无挂）
                [02:13.61]放下执着（无相无色）
                [02:16.17]我怎能
                [02:16.87]波澜不惊
                [02:17.90]去附和
                [02:22.70]一想到你我就
                [02:24.42]Wu
                [02:26.28]恨情不寿
                [02:27.21]总于苦海囚
                [02:28.63]Wu
                [02:31.07]新翠徒留
                [02:31.96]落花影中游
                [02:33.63]Wu
                [02:35.99]相思无用
                [02:36.76]才笑山盟旧
                [02:38.30]Wu
                [02:42.01]谓我何求
                [02:51.54]谓我何求
            `
        },
        {
            name: "琵琶行",
            artist: "奇然&沈谧仁",
            url: `${music_path}/media/琵琶行.mp3`,
            cover: "http://p2.music.126.net/NQBaw13hHiaTh41QQUYsQg==/109951162922231753.jpg",
            lrc: `
                [ti:琵琶行]
                [ar:奇然&沈谧仁]
                [al:高考必背曲目]
                [by:FeiJu]
                [00:05.99]浔阳江头夜送客 枫叶荻花秋瑟瑟
                [00:09.06]主人下马客在船
                [00:12.00]举酒欲饮无管弦 醉不成欢惨将别
                [00:15.07]别时茫茫江浸月
                [00:18.02]忽闻水上琵琶声 主人忘归客不发
                [00:23.97]寻声暗问弹者谁 琵琶声停欲语迟
                [00:35.36]移船相近邀相见 添酒回灯重开宴
                [00:40.80]千呼万唤始出来 犹抱琵琶半遮面
                [00:46.24]转轴拨弦三两声 未成曲调先有情
                [00:51.68]弦弦掩抑声声思 似诉平生不得志
                [00:57.12]低眉信手续续弹 说尽心中无限事
                [01:02.50]轻拢慢捻抹复挑 初为霓裳后六幺
                [01:08.07]大弦嘈嘈如急雨 小弦切切如私语
                [01:15.33]如私语
                [01:18.98]嘈嘈切切错杂弹 大珠小珠落玉盘
                [01:26.47]落玉盘
                [01:29.92]间关莺语花底滑 幽咽泉流冰下难
                [01:35.36]冰泉冷涩弦凝绝 凝绝不通声暂歇
                [01:40.80]别有幽愁暗恨生 此时无声胜有声
                [01:48.36]胜有声
                [01:51.75]银瓶乍破水浆迸 铁骑突出刀枪鸣
                [01:59.17]刀枪鸣
                [02:02.56]曲终收拨当心画 四弦一声如裂帛
                [02:10.12]如裂帛
                [02:13.51]东船西舫悄无言 唯见江心秋月白
                [02:21.00]秋月白
                [02:24.52]沉吟放拨插弦中 整顿衣裳起敛容
                [02:30.02]自言本是京城女 家在虾蟆陵下住
                [02:35.40]十三学得琵琶成 名属教坊第一部
                [02:40.84]唱罢曾教善才服 妆成每被秋娘妒
                [02:46.47]五陵年少争缠头 一曲红绡不知数
                [02:51.65]钿头银篦击节碎 血色罗裙翻酒污
                [02:57.09]今年欢笑复明年 秋月春风等闲度
                [03:02.60]弟走从军阿姨死 暮去朝来颜色故
                [03:08.23]门前冷落鞍马稀 老大嫁作商人妇
                [03:15.59]商人妇
                [03:18.85]商人重利轻别离 前月浮梁买茶去
                [03:26.74]买茶去
                [03:29.49]去来江口守空船 绕船月明江水寒
                [03:37.30]江水寒
                [03:40.89]夜深忽梦少年事 梦啼妆泪红阑干
                [03:48.14]红阑干
                [03:57.55]我闻琵琶已叹息 又闻此语重唧唧
                [04:00.43]同是天涯沦落人 相逢何必曾相识
                [04:03.63]我从去年辞帝京 谪居卧病浔阳城
                [04:08.94]浔阳地僻无音乐 终岁不闻丝竹声
                [04:11.89]住近湓江地低湿 黄芦苦竹绕宅生
                [04:15.09]其间旦暮闻何物 杜鹃啼血猿哀鸣
                [04:20.40]春江花朝秋月夜 往往取酒还独倾
                [04:23.47]岂无山歌与村笛 呕哑嘲哳难为听
                [04:26.54]今夜闻君琵琶语 如听仙乐耳暂明
                [04:31.79]莫辞更坐弹一曲 为君翻作琵琶行
                [04:39.21]琵琶行
                [04:42.61]感我此言良久立 却坐促弦弦转急
                [04:50.16]弦转急
                [04:53.61]凄凄不似向前声 满座重闻皆掩泣
                [05:01.28]皆掩泣
                [05:04.48]座中泣下谁最多 江州司马青衫湿
                [05:12.03]青衫湿
                [05:15.36]江州司马青衫湿
            `
        },
        {
            name: "失眠飞行",
            artist: "花玲&Pia",
            url: `${music_path}/media/失眠飞行.mp3`,
            cover: "https://pic1.rpgsky.net/imgcn/moepic/2023/11/18/6873644e4e0d3b07a41d683ccd20b652.jpg",
            lrc: `
                [ti:失眠飞行]
                [ar:接个吻，开一枪&沈以诚&薛明媛]
                [al:失眠飞行]
                [by:FeiJu]
                [00:01.00]翻唱：花玲&Pia
                [00:02.93]想要和你低空飞行
                [00:05.76]和你到处收集氧气
                [00:08.18]假如迷雾你看不清
                [00:10.74]不如坠入我的心里
                [00:13.87]想带你从吵闹到安宁
                [00:16.50]想带你从多云到转晴
                [00:18.35]想要为你整理衬衣
                [00:20.85]为你到处收集诗句
                [00:24.11]又过了每晚给你热牛奶的时间
                [00:26.80]床头还写着我们没看完的影片
                [00:29.30]离开后的时间里你是否还失眠
                [00:31.67]从不熬夜的我也明显黑了眼圈
                [00:34.48]你送的玩偶依然陪在身边
                [00:39.47]记忆逐渐浮现从开始到终点 又重演
                [00:43.27]我想和你 一起闯进森林潜入海底
                [00:48.40]我想和你 一起看日出到日落天气
                [00:53.46]我想和你穿过格林威治和时间飞行
                [00:58.45]我想见你 穿过教堂和人海拥抱你
                [01:03.44]我想和你
                [01:13.57]我想和你
                [01:24.05]想要和你低空飞行
                [01:26.61]和你到处收集氧气
                [01:29.10]假如迷雾你看不清
                [01:31.66]不如坠入我的心里
                [01:34.74]想带你从吵闹到安宁
                [01:37.36]想带你从多云到转晴
                [01:39.22]想要为你整理衬衣
                [01:41.78]为你到处收集诗句
                [01:45.04]又过了每晚给你热牛奶的时间
                [01:47.60]床头还写着我们没看完的影片
                [01:50.22]离开后的时间里你是否还失眠
                [01:52.66]从不熬夜的我也明显黑了眼圈
                [01:55.41]你送的玩偶依然陪在身边
                [02:00.14]记忆逐渐浮现从开始到终点 又重演
                [02:04.18]我想和你 一起闯进森林潜入海底
                [02:09.10]我想和你 一起看日出到日落天气
                [02:14.22]我想和你穿过格林威治和时间飞行
                [02:19.28]我想见你 穿过教堂和人海拥抱你
                [02:24.34]我想和你
                [02:34.45]我想和你
                [02:44.69]我想和你
                [02:46.35]再路过那家咖啡店
                [02:49.04]熟悉又陌生的地点
                [02:51.28]驻足希望你的身影会出现
                [02:56.27]还没说出口的抱歉
                [02:59.15]曾和你约定的诺言
                [03:01.46]抬头闭眼让泪流进心里面
                [03:05.17]我想和你 一起闯进森林潜入海底
                [03:09.78]我想和你 一起看日出到日落天气
                [03:14.70]我想和你穿过格林威治和时间飞行
                [03:19.89]我想见你 穿过教堂和人海拥抱你
            `
        },
        {
            name: "笑纳",
            artist: "花僮",
            url: `${music_path}/media/笑纳.mp3`,
            cover: "https://img2.kuwo.cn/star/albumcover/500/60/99/2821439530.jpg",
            lrc: `
                [ti:笑纳]
                [ar:花僮]
                [al:笑纳]
                [by:FeiJu]
                [00:15.68]挑灯看遍长街的繁华
                [00:19.00]白胡子老者 临摹入画
                [00:22.27]一番寒暄 附和月色无瑕
                [00:25.53]忽然清风 惹一池落花
                [00:28.80]三两知己结伴的仲夏
                [00:31.93]夜市闹三更 不想回家
                [00:35.20]星光洒落 老树的枝丫
                [00:38.40]马蹄浅浅 落一身风沙
                [00:42.11]撑伞接落花 看那西风骑瘦马
                [00:47.74]谁能为我一眼望穿流霞
                [00:51.70]公子是你吗
                [00:54.32]前面深山谁人家
                [00:57.52]暮夜抚一曲琵琶
                [01:00.72]我欲提笔为汝一幅画 佳人请笑纳
                [01:08.02]撑伞接落花 看那西风骑瘦马
                [01:13.72]谁能为我熬一缕青发 那人是你吗
                [01:20.24]谁在窃语谱情话
                [01:23.38]红尘故事在牵挂
                [01:26.64]夜风微凉烛影暖心啊
                [01:30.68]我悠歌把月光请笑纳
                [02:02.80]挑灯看遍长街的繁华
                [02:06.00]白胡子老者 临摹入画
                [02:09.20]一番寒暄 附和月色无瑕
                [02:12.47]忽然清风 惹一池落花
                [02:15.73]三两知己结伴的仲夏
                [02:19.00]夜市闹三更 不想回家
                [02:22.13]星光洒落 老树的枝丫
                [02:25.40]马蹄浅浅 落一身风沙
                [02:29.04]撑伞接落花 看那西风骑瘦马
                [02:34.74]谁能为我一眼望穿流霞
                [02:38.84]公子是你吗
                [02:41.27]前面深山谁人家
                [02:44.47]暮夜抚一曲琵琶
                [02:47.67]我欲提笔为汝一幅画 佳人请笑纳
                [02:54.52]撑伞接落花 看那西风骑瘦马
                [03:00.66]谁能为我熬一缕青发 那人是你吗
                [03:07.12]谁在窃语谱情话
                [03:10.39]红尘故事在牵挂
                [03:13.65]夜风微凉烛影暖心啊
                [03:17.56]我悠歌把月光请笑纳
                [03:20.95]撑伞接落花 看那西风骑瘦马
                [03:26.58]谁能为我一眼望穿流霞
                [03:30.61]公子是你吗
                [03:33.04]前面深山谁人家
                [03:36.24]暮夜抚一曲琵琶
                [03:39.57]我欲提笔为汝一幅画 佳人请笑纳
                [03:46.80]撑伞接落花 看那西风骑瘦马
                [03:52.50]谁能为我熬一缕青发 那人是你吗
                [03:59.03]谁在窃语谱情话
                [04:02.29]红尘故事在牵挂
                [04:05.49]夜风微凉烛影暖心啊
                [04:09.46]我悠歌把月光请笑纳
            `
        },
        {
            name: "云深不知处",
            artist: "七音盒",
            url: `${music_path}/media/云深不知处.mp3`,
            cover: "http://p1.music.126.net/O6BTkkabSbpx7Ybx3TvWCg==/109951165580299818.jpg",
            lrc: `
                [ti:云深不知处]
                [ar:七音盒]
                [al:云深不知处]
                [by:FeiJu]
                [00:19.95]寻处天涯
                [00:22.19]撒下飞花
                [00:24.69]惹红尘乱世浮华
                [00:28.85]残阳入怀
                [00:31.03]修得因果
                [00:33.52]谁曾为你生死与共
                [00:37.23]前世笔下的我
                [00:39.47]将相思化成魔
                [00:41.59]画一笔魂魄
                [00:43.35]添三分 琥珀
                [00:45.82]红叶凌乱飞落
                [00:48.28]陷泥中不消融
                [00:50.46]任往事重叠
                [00:52.38]却无话可说
                [00:54.68]我就在云深不知处
                [00:57.18]寻得你好苦
                [00:59.42]奈何红尘相逢无人渡
                [01:03.58]怎知那惊鸿一目
                [01:06.14]漫漫天涯路
                [01:08.25]天涯尽头去体会孤独
                [01:31.01]寻处天涯
                [01:33.19]撒下飞花
                [01:35.75]惹红尘乱世浮华
                [01:39.91]残阳入怀
                [01:42.15]修得因果
                [01:44.71]谁曾为你生死与共
                [01:48.29]前世笔下的我
                [01:50.47]将相思化成魔
                [01:52.71]画一笔魂魄
                [01:54.37]添三分 琥珀
                [01:57.13]红叶凌乱飞落
                [01:59.37]陷泥中不消融
                [02:01.61]任往事重叠
                [02:03.27]却无话可说
                [02:05.77]我就在云深不知处
                [02:08.20]寻得你好苦
                [02:10.44]奈何红尘相逢无人渡
                [02:14.60]怎知那惊鸿一目
                [02:17.16]漫漫天涯路
                [02:19.40]天涯尽头去体会孤独
                [02:23.56]我就在云深不知处
                [02:26.05]寻得你好苦
                [02:28.29]奈何红尘相逢无人渡
                [02:32.45]怎知那惊鸿一目
                [02:35.01]漫漫天涯路
                [02:37.13]天涯尽头去体会孤独
            `
        },
        {
            name: "牵丝戏",
            artist: "银临&Aki阿杰",
            url: `${music_path}/media/牵丝戏.mp3`,
            cover: "http://p2.music.126.net/Nd86SOcyCxU5Qu7jdZn_MQ==/7725168696876736.jpg",
            lrc: `
                [ti:牵丝戏]
                [ar:银临&Aki阿杰]
                [al:牵丝戏]
                [by:FeiJu]
                [00:24.57]嘲笑谁恃美扬威
                [00:29.88]没了心如何相配
                [00:34.81]盘铃声清脆
                [00:37.62]帷幕间灯火幽微
                [00:40.44]我和你
                [00:41.85]最天生一对
                [00:46.71]没了你才算原罪
                [00:52.22]没了心才好相配
                [00:57.14]你褴褛我彩绘
                [00:59.96]并肩行过山与水
                [01:02.78]你憔悴
                [01:04.18]我替你明媚
                [01:08.34]是你吻开笔墨
                [01:11.16]染我眼角珠泪
                [01:13.98]演离合相遇悲喜为谁
                [01:19.48]他们迂回误会
                [01:22.36]我却只由你支配
                [01:25.05]问世间哪有更完美
                [01:30.30]兰花指捻红尘似水
                [01:36.00]三尺红台
                [01:37.92]万事入歌吹
                [01:41.50]唱别久悲不成悲
                [01:44.70]十分红处竟成灰
                [01:47.52]愿谁记得谁
                [01:49.56]最好的年岁
                [02:16.00]你一牵我舞如飞
                [02:21.79]你一引我懂进退
                [02:26.42]苦乐都跟随
                [02:29.30]举手投足不违背
                [02:32.11]将谦卑
                [02:33.52]温柔成绝对
                [02:37.68]你错我不肯对
                [02:40.43]你懵懂我蒙昧
                [02:43.25]心火怎甘心扬汤止沸
                [02:48.82]你枯我不曾萎
                [02:51.63]你倦我也不敢累
                [02:54.32]用什么暖你一千岁
                [02:59.70]风雪依稀秋白发尾
                [03:05.27]灯火葳蕤
                [03:07.31]揉皱你眼眉
                [03:10.71]假如你舍一滴泪
                [03:13.91]假如老去我能陪
                [03:16.79]烟波里成灰
                [03:18.83]也去得完美
                [03:22.03]风雪依稀秋白发尾
                [03:27.60]灯火葳蕤
                [03:29.38]揉皱你眼眉
                [03:33.16]假如你舍一滴泪
                [03:36.17]假如老去我能陪
                [03:38.86]烟波里成灰
                [03:40.90]也去得完美
            `
        },
        {
            name: "桃花庵",
            artist: "音阙诗听&封茗囧菌",
            url: `${music_path}/media/桃花庵.mp3`,
            cover: "http://p2.music.126.net/7tGM8mNbwyf2fNwwdjNAaQ==/109951163959605998.jpg",
            lrc: `
                [ti:桃花庵]
                [ar:音阙诗听&封茗囧菌]
                [al:桃花庵]
                [by:FeiJu]
                [00:11.64]演到 话里话外桃花庵 我行我素卖个关
                [00:15.16]故事中 无影无踪犯个懒
                [00:17.98]半梦半醒那一段 无花无酒的答案
                [00:20.80]后人看 将信将疑别谣传
                [00:23.55]我只愿有花枝酒盏
                [00:26.36]车马前辞官
                [00:27.90]甩一袖洒然
                [00:29.12]我与挚友一身烂漫
                [00:31.95]也敢照以肝胆
                [00:33.71]我畅谈
                [00:34.74]我~与 各位共清欢
                [00:37.49]我~笑 众人看不穿
                [00:40.30]酒醒后月下听禅
                [00:43.12]花间长眠一整晚
                [00:44.85]我畅谈
                [00:45.94]我~与 各位共清欢
                [00:48.69]我~笑 众人看不穿
                [00:51.38]酒醒后月下听禅
                [00:54.26]花间长眠一整晚
                [00:56.11]抖抖衣衫
                [01:18.92]写着 若隐若现桃花庵 有胆有识的悲欢
                [01:22.12]传世后 一字一句都艰难
                [01:24.94]如痴如狂那一段 独清独醒的隐瞒
                [01:27.75]这一生 亦真亦假别谣传
                [01:30.51]我只愿有花枝酒盏
                [01:33.26]车马前辞官
                [01:34.67]甩一袖洒然
                [01:36.14]我与挚友一身烂漫
                [01:38.83]也敢照以肝胆
                [02:03.08]我这般
                [02:04.04]我~是 人间一云烟
                [02:06.73]我~笑 众人不得闲
                [02:09.55]借来俗人一亩田
                [02:12.30]此生醉倒花酒前
                [02:14.28]我这般
                [02:15.05]我~是 人间一云烟
                [02:17.87]我~笑 众人不得闲
                [02:20.75]借来俗人一亩田
                [02:23.31]此生醉倒花酒前
                [02:25.23]我畅谈
                [02:26.25]我~与 各位共清欢
                [02:29.00]我~笑 众人看不穿
                [02:31.82]酒醒后月下听禅
                [02:34.63]花间长眠一整晚
                [02:36.36]我畅谈
                [02:37.45]我~与 各位共清欢
                [02:40.27]我~笑 众人看不穿
                [02:43.02]酒醒后月下听禅
                [02:45.77]花间长眠一整晚
                [02:47.56]抖抖衣衫
            `
        },
        {
            name: "惊鸿醉",
            artist: "指尖笑",
            url: `${music_path}/media/惊鸿醉.mp3`,
            cover: "https://p1.music.126.net/pk6nTn7UkpXBb4D5rrZqWA==/109951168223765680.jpg",
            lrc: `
                [ti:惊鸿醉]
                [ar:指尖笑]
                [al:惊鸿醉]
                [by:FeiJu]
                [00:01.66]一纸相思寄南北
                [00:06.27]叹人间惊鸿醉 含情一笑的美
                [00:11.39]回眸间春风来作陪
                [00:25.82]残花褪 一笔生晖斜阳点缀
                [00:30.50]一缕相思留余味
                [00:35.23]孤影对 一杯爱恨望穿秋水
                [00:40.10]月照西楼谁相随
                [00:44.96]良人归 一曲离愁沾染是非
                [00:49.76]英雄宿醉饮空杯
                [00:54.56]痴心碎 一脸憔悴眉眼含泪
                [00:59.36]一纸相思寄南北
                [01:04.16]叹人间惊鸿醉 含情一笑的美
                [01:09.03]回眸间春风来作陪
                [01:13.70]叹红颜惊鸿醉 为你一生无悔
                [01:18.56]红尘里数我最愚昧
                [01:42.43]残花褪 一笔生晖斜阳点缀
                [01:47.36]一缕相思留余味
                [01:52.16]孤影对 一杯爱恨望穿秋水
                [01:56.96]月照西楼谁相随
                [02:01.76]良人归 一曲离愁沾染是非
                [02:06.56]英雄宿醉饮空杯
                [02:11.36]痴心碎 一脸憔悴眉眼含泪
                [02:16.16]一纸相思寄南北
                [02:20.64]叹人间惊鸿醉 含情一笑的美
                [02:25.83]回眸间春风来作陪
                [02:30.31]叹红颜惊鸿醉 为你一生无悔
                [02:35.36]红尘里数我最愚昧
            `
        },
        {
            name: "美人画卷",
            artist: "大神慧",
            url: `${music_path}/media/美人画卷.mp3`,
            cover: "http://p2.music.126.net/sZJIb_AAdeODOm8gWW1TNA==/109951165751305295.jpg",
            lrc: `
                [ti:美人画卷]
                [ar:大神慧]
                [al:美人画卷]
                [by:FeiJu]
                [00:00.94]青山常伴绿水
                [00:04.27]燕雀已是南飞
                [00:07.66]美人画卷残留一丝青灰叹余美
                [00:14.51]回忆斑驳微醉
                [00:17.90]叹相思未随
                [00:21.36]几春几秋几段轮回
                [00:55.72]一袭白裳梅花泪
                [00:59.12]一山水旁映一枚
                [01:02.51]厌红尘 独怜花红眼眉
                [01:09.36]回首不见人痴嗔
                [01:12.81]那景那物触了神
                [01:16.14]春去秋来花开了几分
                [01:23.12]时光怎不经一生
                [01:25.04]浮浮沉沉已半生
                [01:26.83]一壶浊酒欲随风
                [01:28.49]一步一瞥似惊鸿
                [01:30.16]情字要如何追问
                [01:31.88]一指兰花为谁挽留
                [01:36.81]青山常伴绿水
                [01:40.20]燕雀已是南飞
                [01:43.60]美人画卷残留一丝青灰叹余美
                [01:50.51]回忆斑驳微醉
                [01:53.96]叹相思未随
                [01:57.36]几春几秋几段轮回
                [02:31.93]时光怎不经一生
                [02:33.66]浮浮沉沉已半生
                [02:35.38]一壶浊酒欲随风
                [02:37.05]一步一瞥似惊鸿
                [02:38.78]情字要如何追问
                [02:40.50]一指兰花为谁挽留
                [02:45.43]青山常伴绿水
                [02:48.82]燕雀已是南飞
                [02:52.28]美人画卷残留一丝青灰叹余美
                [02:59.13]回忆斑驳微醉
                [03:02.58]叹相思未随
                [03:05.98]几春几秋几段轮回
                [03:12.89]往昔鸳鸯戏水
                [03:16.28]而今不相依偎
                [03:19.67]美景良辰纵然妩媚亦徒留伤悲
                [03:26.52]越一步便一碎
                [03:29.98]春梦相伴入睡
                [03:33.43]莫染香氛莫谙世混沌
                [03:40.28]莫染香氛莫谙世混沌
            `
        },
        {
            name: "月无眠",
            artist: "酒禾.",
            url: `${music_path}/media/月无眠.mp3`,
            cover: "http://p1.music.126.net/fk3myS75uvu4M5-ZwgiucA==/109951166119687855.jpg",
            lrc: `
                [ti:月无眠]
                [ar:酒禾.]
                [al:月无眠]
                [by:FeiJu]
                [00:10.18]似美景良辰天 拱桥下戏水鸳
                [00:14.72]我轻轻勾勒 你笑弯弯 动人的眉眼
                [00:19.14]今夜月色无边 入目我的窗前
                [00:23.62]山川寂寞你却入我眼
                [00:28.55]万家灯火阑珊 为你留灯一盏
                [00:32.77]我望眼欲穿 你枕风宿雪的 那夜晚
                [00:37.44]你归来时的不堪
                [00:39.68]世间万千波澜 我能温暖你的孤寒
                [00:46.53]我与你拂袖翩翩 不过问因果善变
                [00:52.36]因为你 是我的温柔眷恋
                [00:56.58]自此江湖笑人间 你就坠入我心田
                [01:01.83]我一见你 便不由心生依恋
                [01:05.48]我与你拂袖翩翩 共揽月色入好眠
                [01:10.72]因为我 是你眼里的无邪
                [01:15.01]再与你日落西山 世间万般皆清欢
                [01:20.13]在黎明前 一曲千杯意阑珊
                [01:32.85]似美景良辰天 拱桥下戏水鸳
                [01:37.65]我轻轻勾勒 你笑弯弯 动人的眉眼
                [01:42.16]今夜月色无边 入目我的窗前
                [01:46.77]山川寂寞你却入我眼
                [01:51.70]万家灯火阑珊 为你留灯一盏
                [01:55.92]我望眼欲穿 你枕风宿雪的 那夜晚
                [02:00.72]你归来时的不堪
                [02:02.96]世间万千波澜 我能温暖你的孤寒
                [02:09.68]我与你拂袖翩翩 不过问因果善变
                [02:15.50]因为你 是我的温柔眷恋
                [02:19.73]自此江湖笑人间 你就坠入我心田
                [02:24.85]我一见你 便不由心生依恋
                [02:28.69]我与你拂袖翩翩 共揽月色入好眠
                [02:33.94]因为我 是你眼里的无邪
                [02:38.10]再与你日落西山 世间万般皆清欢
                [02:43.34]在黎明前 一曲千杯意阑珊
                [02:47.18]我与你拂袖翩翩 不过问因果善变
                [02:52.43]因为你 是我的温柔眷恋
                [02:56.59]自此江湖笑人间 你就坠入我心田
                [03:01.84]我一见你 便不由心生依恋
                [03:05.62]我与你拂袖翩翩 共揽月色入好眠
                [03:10.74]因为我 是你眼里的无邪
                [03:15.02]再与你日落西山 世间万般皆清欢
                [03:20.27]在黎明前 一曲千杯意阑珊
            `
        },
        {
            name: "叹离别",
            artist: "麦小兜&苏星婕",
            url: `${music_path}/media/叹离别.mp3`,
            cover: "http://p2.music.126.net/xqw6r3Hg4F_Q_OfgIR8RuA==/109951168719088544.jpg",
            lrc: `
                [ti:叹离别]
                [ar:麦小兜&苏星婕]
                [al:叹离别]
                [by:FeiJu]
                [00:14.91]唱一曲相思叹离别
                [00:18.17]谁教我情字何解
                [00:20.80]看一场谢幕空流泪
                [00:24.00]我等的人终不回
                [00:27.13]唱一曲相思叹离别
                [00:30.14]奈何等闲空悲切
                [00:33.02]饮一杯浊酒望明月
                [00:36.09]至死不渝终不悔
                [00:39.10]日落西山让人醉
                [00:42.04]我还想着你的美
                [00:45.05]回忆在来来回回
                [00:48.06]我的心破碎
                [00:51.00]昨夜一场大雨
                [00:54.01]让思念决堤
                [00:57.02]窗外云淡风轻
                [01:00.22]我还是想你
                [01:02.97]唱一曲相思叹离别
                [01:06.11]谁教我情字何解
                [01:08.73]看一场谢幕空流泪
                [01:12.12]我等的人终不回
                [01:15.00]唱一曲相思叹离别
                [01:18.01]奈何等闲空悲切
                [01:20.76]饮一杯浊酒望明月
                [01:24.03]至死不渝终不悔
                [01:38.87]日落西山让人醉
                [01:42.07]我还想着你的美
                [01:44.95]回忆在来来回回
                [01:47.95]我的心破碎
                [01:50.90]昨夜一场大雨
                [01:54.10]让思念决堤
                [01:56.98]窗外云淡风轻
                [02:00.05]我还是想你
                [02:02.87]唱一曲相思叹离别
                [02:06.19]谁教我情字何解
                [02:08.88]看一场谢幕空流泪
                [02:11.95]我等的人终不回
                [02:14.90]唱一曲相思叹离别
                [02:18.10]奈何等闲空悲切
                [02:21.04]饮一杯浊酒望明月
                [02:23.99]至死不渝终不悔
                [02:26.99]唱一曲相思叹离别
                [02:30.00]谁教我情字何解
                [02:32.75]看一场谢幕空流泪
                [02:35.89]我等的人终不回
                [02:38.90]唱一曲相思叹离别
                [02:42.03]奈何等闲空悲切
                [02:44.72]饮一杯浊酒望明月
                [02:47.99]至死不渝终不悔
            `
        },
        {
            name: "一步一杀",
            artist: "鱼儿七",
            url: `${music_path}/media/一步一杀.mp3`,
            cover: "https://imgessl.kugou.com/stdmusic/20240131/20240131163042676036.jpg",
            lrc: `
                [ti:一步一杀]
                [ar:鱼儿七]
                [al:一步一杀]
                [by:FeiJu]
                [00:03.83]你一步一杀 最伤人的话
                [00:06.78]劝我不如放下
                [00:09.72]早就知道结局 却还不死心
                [00:12.54]追问什么回答
                [00:27.26]又是夜不能寐 看风卷起
                [00:30.20]干枯的回忆
                [00:33.47]如今你的眼睛 那么深情
                [00:36.28]看向了哪里
                [00:39.29]留给我的剩下 一分怜悯
                [00:41.72]和三分嫌弃
                [00:44.22]我付出全心全意 换来了一身淤青
                [00:47.55]到底是何必
                [00:50.62]你一步一杀 最伤人的话
                [00:53.50]劝我不如放下
                [00:56.31]早就知道结局 却还不死心
                [00:59.32]追问什么回答
                [01:02.14]你一步一杀 最冰冷的话
                [01:05.21]让我把痛忍下
                [01:07.96]我哭红了双眼 风吹乱了发
                [01:10.97]你却说算了吧
                [01:25.63]又是夜不能寐 看风卷起
                [01:28.57]干枯的回忆
                [01:31.90]如今你的眼睛 那么深情
                [01:34.39]看向了哪里
                [01:37.79]留给我的剩下 一分怜悯
                [01:40.28]和三分嫌弃
                [01:42.97]我付出全心全意 换来了一身淤青
                [01:46.17]到底是何必
                [01:49.18]你一步一杀 最伤人的话
                [01:52.06]劝我不如放下
                [01:55.00]早就知道结局 却还不死心
                [01:57.75]追问什么回答
                [02:00.83]你一步一杀 最冰冷的话
                [02:03.71]让我把痛忍下
                [02:06.65]我哭红了双眼 风吹乱了发
                [02:09.59]你却说算了吧
                [02:12.60]你一步一杀 最伤人的话
                [02:15.42]劝我不如放下
                [02:18.43]早就知道结局 却还不死心
                [02:21.31]追问什么回答
                [02:24.23]你一步一杀 最冰冷的话
                [02:27.30]让我把痛忍下
                [02:30.24]我哭红了双眼 风吹乱了发
                [02:33.12]你却说算了吧
            `
        },
        {
            name: "浪子闲话",
            artist: "花僮",
            url: `${music_path}/media/浪子闲话.mp3`,
            cover: "https://imgessl.kugou.com/stdmusic/20201105/20201105152707626594.jpg",
            lrc: `
                [ti:浪子闲话]
                [ar:花僮]
                [al:浪子闲话]
                [by:FeiJu]
                [00:14.36]捻一指流沙 池鱼溅浪花
                [00:19.25]待我醉马挥剑 斩落晚残霞
                [00:23.93]梦见紫金甲 头戴凤批纱
                [00:28.79]黄粱一梦 太虚幻浮夸
                [00:33.46]聊一篇闲话 布衣越冬夏
                [00:38.32]待我功成名就 西山纵肥马
                [00:43.25]凭酒论天下 喊声小二续茶
                [00:48.05]明月邀窗 故佯装潇洒
                [00:52.60]我饮过风 咽过沙
                [00:55.22]浪子无钱逛酒家
                [00:57.52]闻琵琶 谁人画
                [00:59.96]不再春风如寒鸦
                [01:02.13]我饮过风 咽过沙
                [01:04.69]浪迹天涯浮云下
                [01:07.00]叹流年 似黄花
                [01:09.56]问过苍天无人答
                [01:11.67]我饮过风 咽过沙
                [01:14.23]浪子无钱逛酒家
                [01:16.66]闻琵琶 谁人画
                [01:19.03]不再春风如寒鸦
                [01:21.27]我饮过风 咽过沙
                [01:23.83]浪迹天涯浮云下
                [01:26.26]叹流年 似黄花
                [01:28.63]问过苍天无人答
                [01:50.39]聊一篇闲话 布衣越冬夏
                [01:55.12]待我功成名就 西山纵肥马
                [01:59.99]凭酒论天下 喊声小二续茶
                [02:04.72]明月邀窗 故佯装潇洒
                [02:09.33]我饮过风 咽过沙
                [02:12.02]浪子无钱逛酒家
                [02:14.45]闻琵琶 谁人画
                [02:16.88]不再春风如寒鸦
                [02:19.00]我饮过风 咽过沙
                [02:21.62]浪迹天涯浮云下
                [02:23.99]叹流年 似黄花
                [02:26.42]问过苍天无人答
                [02:28.53]我饮过风 咽过沙
                [02:31.22]浪子无钱逛酒家
                [02:33.65]闻琵琶 谁人画
                [02:36.02]不再春风如寒鸦
                [02:38.00]我饮过风 咽过沙
                [02:40.82]浪迹天涯浮云下
                [02:43.25]叹流年 似黄花
                [02:45.62]问过苍天无人答
                [02:47.92]我饮过风 咽过沙
                [02:50.48]浪子无钱逛酒家
                [02:52.85]闻琵琶 谁人画
                [02:55.22]不再春风如寒鸦
                [02:57.62]我饮过风 咽过沙
                [02:59.99]浪迹天涯浮云下
                [03:02.36]叹流年 似黄花
                [03:04.79]问过苍天无人答
                [03:06.84]我饮过风 咽过沙
                [03:09.59]浪子无钱逛酒家
                [03:11.96]闻琵琶 谁人画
                [03:14.26]不再春风如寒鸦
                [03:16.57]我饮过风 咽过沙
                [03:19.19]浪迹天涯浮云下
                [03:21.49]叹流年 似黄花
                [03:23.99]问过苍天无人答
            `
        },
        {
            name: "春庭雪",
            artist: "司清",
            url: `${music_path}/media/春庭雪.mp3`,
            cover: "https://p2.music.126.net/4wvL06AeLkY7G6V6m1LsNA==/109951169743957582.jpg",
            lrc: `
                [ti:春庭雪]
                [ar:司清]
                [al:春庭雪]
                [by:FeiJu]
                [00:16.38]庭中梨花谢又一年
                [00:22.65]立清宵 月华洒空阶
                [00:28.80]梦里笙箫奏旧乐
                [00:32.06]梦醒泪染胭脂面
                [00:35.77]《小重山》 念一遍又一遍
                [00:42.81]闻 更漏咽 频教前尘辞长夜
                [00:48.76]久无眠 深坐对宫檐
                [00:55.04]多情最是春庭雪
                [00:58.30]年年落满离人苑
                [01:02.01]薛涛笺 上言若如初见
                [01:08.28]这一世 太漫长却止步咫尺天涯间
                [01:14.81]谁仍记 那梨花若雪时节
                [01:21.40]我心匪石不可转
                [01:24.73]我心匪席不可卷
                [01:28.25]空凝眸 情字深浅无解
                [02:01.29]庭中梨花谢又一年
                [02:07.81]立清宵 月华洒空阶
                [02:13.89]梦里笙箫奏旧乐
                [02:17.22]梦醒泪染胭脂面
                [02:20.87]《小重山》 念一遍又一遍
                [02:27.97]闻 更漏咽 频教前尘辞长夜
                [02:33.86]久无眠 深坐对宫檐
                [02:40.33]多情最是春庭雪
                [02:43.59]年年落满离人苑
                [02:47.37]薛涛笺 上言若如初见
                [02:53.38]这一世 太漫长却止步咫尺天涯间
                [02:59.97]谁仍记 那梨花若雪时节
                [03:06.57]我心匪石不可转
                [03:09.96]我心匪席不可卷
                [03:13.48]空凝眸 情字深浅无解
                [03:19.69]这一世 太漫长却止步咫尺天涯间
                [03:26.09]谁仍记 那梨花若雪时节
                [03:32.87]我心匪石不可转
                [03:36.13]我心匪席不可卷
                [03:39.85]空凝眸 情字深浅无解
                [03:46.69]春欲晚 梨花谢又一年
            `
        },
    ]
});

// 音频进度增量
const volume_increment = 5;

// 通过键盘左右键控制播放进度
window.addEventListener("keydown", function (event) {
    event = event || window.event;
    if (event.keyCode === 37 && ap.audio.currentTime - volume_increment >= 0) {
        ap.audio.currentTime -= volume_increment;
    }
    if (event.keyCode === 39 && ap.audio.currentTime + volume_increment <= ap.audio.duration) {
        ap.audio.currentTime += volume_increment;
    }
});
