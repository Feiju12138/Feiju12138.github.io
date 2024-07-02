/**
 * 通过Elasticsearch进行搜索
 */
let search = "local";

function initElasticsearch() {
    // 放大镜图标
    const search_icon = document.querySelector(".search-pop-overlay .search-icon");
    // 搜索框
    const search_input = document.querySelector(".search-pop-overlay .search-input");
    // 搜索结果框
    const search_output = document.querySelector(".search-pop-overlay .search-result-container");
    // 初始化搜索框内的文字为Local搜索
    search_input.placeholder = "Local搜索...";
    // 放大镜双击事件
    search_icon.addEventListener("dblclick", function () {
        if (search === "local") {
            // 搜索框内的文字切换为Elasticsearch搜索
            search_input.placeholder = "Elasticsearch搜索...";
            showToast("恭喜你发现了一个彩蛋，现在可以通过Enter来使用Elasticsearch进行全文搜索了");
            search = "elasticsearch";

            // 克隆搜索框节点，以清除所有事件
            const new_search_input = search_input.cloneNode(true);
            search_input.parentNode.append(new_search_input);
            search_input.parentNode.removeChild(search_input);

            // 克隆搜索图标节点，以清除所有事件
            const new_search_icon = search_icon.cloneNode(true);
            search_icon.parentNode.append(new_search_icon);
            search_icon.parentNode.removeChild(new_search_icon);

            // 切换为Elasticsearch搜索
            changeSearchToElasticsearch(new_search_icon, new_search_input, search_output);
        }
    });
}

function changeSearchToElasticsearch(search_icon, search_input, search_output) {

    function Dec2Dig(n1) {
        let s = "";
        let n2 = 0;
        for (let i = 0; i < 4; i++) {
            n2 = Math.pow(2, 3 - i);
            if (n1 >= n2) {
                s += "1";
                n1 = n1 - n2;
            } else
                s += "0";
        }
        return s;
    }

    function Dig2Dec(s) {
        let retV = 0;
        if (s.length === 4) {
            for (let i = 0; i < 4; i++) {
                retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
            }
            return retV;
        }
        return -1;
    }

    function Hex2Utf8(s) {
        let retS = "";
        let tempS = "";
        let ss = "";
        if (s.length === 16) {
            tempS = "1110" + s.substring(0, 4);
            tempS += "10" + s.substring(4, 10);
            tempS += "10" + s.substring(10, 16);
            let sss = "0123456789ABCDEF";
            for (let i = 0; i < 3; i++) {
                retS += "%";
                ss = tempS.substring(i * 8, (eval(i) + 1) * 8);
                retS += sss.charAt(Dig2Dec(ss.substring(0, 4)));
                retS += sss.charAt(Dig2Dec(ss.substring(4, 8)));
            }
            return retS;
        }
        return "";
    }

    function Str2Hex(s) {
        let c = "";
        let n;
        let ss = "0123456789ABCDEF";
        let digS = "";
        for (let i = 0; i < s.length; i++) {
            c = s.charAt(i);
            n = ss.indexOf(c);
            digS += Dec2Dig(eval(n));
        }

        return digS;
    }

    function EncodeUtf8(s1) {
        let s = escape(s1);
        let sa = s.split("%");
        let retV = "";
        if (sa[0] !== "") {
            retV = sa[0];
        }
        for (let i = 1; i < sa.length; i++) {
            if (sa[i].substring(0, 1) === "u") {
                retV += Hex2Utf8(Str2Hex(sa[i].substring(1, 5)));
            } else retV += "%" + sa[i];
        }
        return retV;
    }

    function search_to_elasticsearch(keywords) {
        showToast("正在使用Elasticsearch搜索");
        // 添加class属性中的no-result值
        if (search_output.classList.contains("no-result")) {
            search_output.classList.remove("no-result");
        }
        // 清除结果列表
        search_output.innerHTML = `
            <div class="search-stats">正在使用Elasticsearch全文搜索...</div>
            <hr>
            <ul class="search-result-list"></ul>
        `;
        const result_header = document.querySelector(".search-pop-overlay .search-stats");
        const result_ul = document.querySelector(".search-pop-overlay .search-result-list");

        fetch(`https://es-search.loli.fj.cn/search/${keywords}`).then((response) => {
            return response.json();
        }).then((results) => {
            if (results == null) {
                // 展示结果集数据总数
                result_header.innerHTML = "找到 0 个搜索结果";
            } else {
                // 展示结果集数据总数
                const result_count = results.length;
                result_header.innerHTML = `找到 ${result_count} 个搜索结果`;
                // 遍历结果集
                for (let result of results) {
                    result = JSON.parse(result);
                    // 解析标题
                    const title_base64 = result["title_base64"];
                    let title = window.atob(title_base64);
                    title = decodeURIComponent(EncodeUtf8(title));
                    // 解析路径
                    const path_base64 = result["path_base64"];
                    let path = window.atob(path_base64);
                    path = decodeURIComponent(EncodeUtf8(path));
                    // 创建超链接节点
                    const a = document.createElement("a");
                    a.href = `${path}?highlight=${keywords}`;
                    a.className = "search-result-title";
                    a.setAttribute("data-pjax-state", "");
                    a.innerHTML = title;
                    // 创建列表项节点
                    const li = document.createElement("li");
                    // 追加超链接节点到列表项节点
                    li.append(a);
                    // 追加列表项节点到无序列表节点
                    result_ul.append(li);
                }
            }
        });
    }

    search_icon.addEventListener("click", function () {
        search_to_elasticsearch(search_input.value);
    });
    search_input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            search_to_elasticsearch(search_input.value);
        }
    });
}

initElasticsearch();
