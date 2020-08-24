// 配置完以后记得在首页导入导入
var baseURL = 'http://localhost:7788/'

// 取出token
var token = localStorage.getItem('token')

// 使用ajaxSetup设置headers 使用拿到的token进行授权
// 这一步的目的就是给所有的请求全部加上请求头 并且每一个请求的请求头里都会有token 这样就可以了
// 设置ajax请求的公共属性值
$.ajaxSetup({
  headers:{
    'Authorization': token
  }
})