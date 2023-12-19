// 切换导航栏在小屏幕上的可见性
function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// 设置导航栏项的点击事件监听器
document.getElementById('navbar').addEventListener('click', function(event) {
    // 检查点击的是哪个链接
    if (event.target.tagName === 'A') {
        var allLinks = document.querySelectorAll('#navbar a');
        allLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        // 为点击的链接添加 'active' 类
        event.target.classList.add('active');

        // 如果是小屏幕，点击后关闭菜单
        if (window.innerWidth < 600) {
            toggleNavbar();
        }
    }
});

// 监听窗口大小改变事件
window.addEventListener('resize', function() {
    if (window.innerWidth >= 600) {
        var navbar = document.getElementById('navbar');
        navbar.classList.remove('active');
    }
});
