/**
 * 重新渲染分类页面
 */
function loadCategories() {
    let categoryList = document.getElementsByClassName("category-list-item");

    if (categoryList[0] != null) {
        for (let category of categoryList) {

            // 生成一个随机的索引
            let randIndex = randomNum(0, lipstick_colors.length - 1);

            // 创建前缀节点
            let node = document.createElement("p");
            node.innerHTML = `${lipstick_colors[randIndex].brand} - ${lipstick_colors[randIndex].name}`;
            node.style.color = "white";
            category.insertBefore(node, category.childNodes[0]);

            // 修改背景颜色
            category.style.backgroundColor = lipstick_colors[randIndex].color;

            // 获取页面跳转超链接
            // let src = $(category.childNodes[1]).attr("href");
            let src = category.childNodes[1].href;
            category.onclick = function () {
                pjax.loadUrl(src);
            };
        }
    }
}

if (window.location.pathname==="/categories/") {
    loadCategories();
}

