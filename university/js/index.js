$(function () {
  // 使用load进行界面的跳转
  // 找到菜单栏的元素 使用选择器进行选择
  $('.bottom-left ul').on('click', 'li', function () {
    // alert($(this).text())
    if ($(this).text() == '用户管理') {
      // 使用ajax的load 进行界面的跳转 
      // 首先 先看下页面在哪里进行显示 到index.html里找到content
      // 这里配置完以后 使用本地服务器打开
      $('.content').load('../pages/user.html')
    } else if ($(this).text() == '栏目管理'){
      $('.content').load('../pages/category.html')
    }
  })
})