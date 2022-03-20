// 路由是神魔恋???? hash又是啥



// 监听路由hash的变化
// window.addEventListener('hashchange')

// 1. 监听路由辩护
// 2. 注册全局router-link router-view
// 3. 路由变化, router-view找到匹配的组件,动态渲染
// interface options {
//   routes
//   history
// }
// function createRouter(options: any) {
//   return new Router(options)
// }

// function createWebHashHistory() {
// }

// class Router {
//   constructor(options) {
//     // 监听hash路由 使用createWebHashHistory监听,实现解耦
//     this.history = options.history
//     this.router = options.routes
//     // 管理当前的路由,一旦变化触发组件渲染
//     this.current = ref(this.history.url)
//     this.history.bindEvents(() => {
//         this.current.value = window.location.hash.slice(1)
//     })
//   }
//   install(app) {
//     app.component('router-link')
//     app.component('router-view')
//   }
// }
