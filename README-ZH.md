# 介绍

[![vue](https://img.shields.io/badge/vue-2.6.10-brightgreen.svg)](https://github.com/vuejs/vue) [![element-ui](https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg)](https://github.com/ElemeFE/element) [![Build Status](https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master)](https://travis-ci.org/PanJiaChen/vue-element-admin) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE) [![GitHub release](https://img.shields.io/github/release/PanJiaChen/vue-element-admin.svg)](https://github.com/PanJiaChen/vue-element-admin/releases) [![donate](https://img.shields.io/badge/%24-donate-ff69b4.svg)](https://panjiachen.gitee.io/vue-element-admin-site/zh/donate) [![GitHub stars](https://img.shields.io/github/stars/PanJiaChen/vue-element-admin.svg?style=social&label=Stars)](https://github.com/PanJiaChen/vue-element-admin)

back_demo是一个后台前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)实现。它使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。



```text

- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置

- 打包发布环境
  - run build:stage //测试环境
  - run build:prod  //生产环境
  
  
- 全局功能
  - 国际化多语言
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 本地/后端 mock 数据
  - 自适应收缩侧边栏
  
- 表格
  - 动态表格
  - 拖拽表格  
  
- 错误页面
  - 401
  - 404
  
- 組件
  - 删除
  - 面包屑
  - 分页
  - 搜索
  - 本地图片上传
  
- 错误日志

```

## 前序准备

你需要在本地安装 [node](https://nodejs.org/en/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](https://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用Mock.js进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

同时配套一个系列的教程文章，如何从零构建一个完整的管理后台项目，建议大家先看完这些文章再来实践本项目。

- [手摸手，带你用 vue 撸后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
- [手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
- [手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
- [手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
- [手摸手，带你用 vue 撸后台 系列五(v4.0 新版本)](https://juejin.im/post/5c92ff94f265da6128275a85)
- [手摸手，带你封装一个 vue component](https://segmentfault.com/a/1190000009090836)
- [手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)
- [手摸手，带你用合理的姿势使用 webpack4（上）](https://juejin.im/post/5b56909a518825195f499806)
- [手摸手，带你用合理的姿势使用 webpack4（下）](https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc)


本项目不支持低版本浏览器(如 ie)，有需求请自行添加 polyfill [详情](https://github.com/PanJiaChen/vue-element-admin/wiki#babel-polyfill)



## 目录结构

本项目已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局 layout 头部右上角退出
│   ├── less                   # 修改 element-ui默认样式
│   ├── request                # 请求相关
│	│   ├── api.js             # 所有请求接口统一管理
|   │   ├── http.js			   # 封装的http请求和拦截器
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理 vuex状态管理仓库
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
|   |   ├──alert.js            #弹窗提醒
|   |   ├──aluth.js            #操作token  存取移除
|   |   ├──get-page-title.js   #设置浏览器显示标题
|   |   ├──validate.js         #输入框内容验证   可以配置正则相关
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.development           # 环境变量   本地开发-域名配置
├── .env.production            # 环境变量   打包测试-域名配置
├── .env.staging               # 环境变量   打包生产-域名配置
├── .eslintrc.js               # eslint 配置项 代码校验
├── .babelrc                   # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置 配置打包  代理跨域等
├── postcss.config.js          # postcss 配置
└── package.json
```

## 安装

```bash
# 克隆项目
git clone https://gitee.com/zwl55555/back_demo.git

# 进入项目目录
cd vue-element-admin

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run serve
```





强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 [yarn](https://github.com/yarnpkg/yarn) 替代 `npm`。

Windows 用户若安装不成功，很大概率是`node-sass`安装失败，[解决方案](https://github.com/PanJiaChen/vue-element-admin/issues/24)。

另外因为 `node-sass` 是依赖 `python`环境的，如果你之前没有安装和配置过的话，需要自行查看一下相关安装教程。



## Vue 生态圈

1. [Vue Router](https://router.vuejs.org/) 是 vue 官方的路由。它能快速的帮助你构建一个单页面或者多页面的项目。
2. [Vuex](https://vuex.vuejs.org/) 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。它能解决你很多全局状态或者组件之间通信的问题。
3. [Vue Loader](https://vue-loader.vuejs.org/) 是为 vue 文件定制的一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件。它能在开发过程中使用热重载来保持状态，为每个组件模拟出 scoped CSS 等等功能。不过大部分情况下你不需要对它直接进行配置，脚手架都帮你封装好了。

1. [Vue Test Utils](https://vue-test-utils.vuejs.org/) 是官方提供的一个单元测试工具。它能让你更方便的写单元测试。
2. [Vue Dev-Tools](https://github.com/vuejs/vue-devtools) Vue 在浏览器下的调试工具。写 vue 必备的一个浏览器插件，能大大的提高你调试的效率。
3. [Vue CLI](https://cli.vuejs.org/) 是官方提供的一个 vue 项目脚手架，本项目也是基于它进行构建的。它帮你封装了大量的 webpack、babel 等其它配置，让你能花更少的精力在搭建环境上，从而能更专注于页面代码的编写。不过所有的脚手架都是针对大部分情况的，所以一些特殊的需求还是需要自己进行配置。建议先阅读一遍它的文档，对一些配置有一些基本的了解。
4. [Vetur](https://github.com/vuejs/vetur) 是 VS Code 的插件. 如果你使用 VS Code 来写 vue 的话，这个插件是必不可少的。





## 开发教程



### 连接后台真数据

这个是很多人都关心的，我看了网上很多文章都是直接去 vue.config.js 去配 proxy，这并不是正确的配置方法。
还记得上个版本有分出各个环境的配置文件配置的，怎么可能这个版本就没有了？官方是有提供配置文件的

.env.development：本地
.env.staging：测试环境
.env.production：正式环境

```js
# just a flag
ENV = 'development/production/staging'

# base api
VUE_APP_BASE_API = '本地域名/生产域名/测试域名'
```

![](instructions\微信截图_20211214181545.png)

### Mock 假数据

vue页面文件：/src/views/videolist
api接口：/src/request/api
PS：可能很多人觉得 api 文件多余，直接在页面写路径，但是用 api 文件在路径上更方便管理，这点在微服务中通过特定服务名去访问显得尤为明显，类似这种：

![](instructions\微信截图_20211214182708.png)

- mock 虚拟数据文件：/mock/user.js
- ![](instructions\微信截图_20211214183045.png)
- mock 虚拟数据文件：/mock/table.js
- ![](instructions\微信截图_20211214183125.png)

**流程说明：**

下面以登录为例

页面接口先去请求 api 文件

===========================================================================================================================

请求：

![](instructions\login.png)

接口：

![](instructions\微信截图_20211214183445.png)

拦截：

![](instructions\微信截图_20211214183528.png)

## 登录

```js
import { validUsername, validPassword } from "@/utils/validate";     //引入表单校验
import { mapActions, mapGetters } from "vuex";                       //引入store工具
import {successAlert,warningAlert} from "@/utils/alert"              //引入提示工具

methods: {
    ...mapActions({
      login: "user/login",           //引入store中user模块下的login方法
    }),
}

//监听登录    
handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) return console.log("error submit!!");
		
        //调用store/user下面的login方法
        this.login(this.loginForm).then((res) => {
          if (res.data.code == 200) {
            this.$router.push({ path: this.redirect || "/" });
            this.loading = false;
            successAlert("登录成功")
          }else{
            this.loading = false;
            warningAlert("登录失败")
          }
        });
      });
    },
```



#### 登录逻辑

/src/views/permissions.js

#### 

在登陆方法里建议不要做多于操作，就登陆就行了，因为缓存用的是 vuex 和之前版本一样刷新就没了，所以还需要走 getInfo 方法来获取需要的数据，如果你按照框架的来，建议必要权限数据在这取，然后放 vuex，那些准备直接放 localStorage 的请无视。



这个文件就是你路由走的逻辑，简单看下重要部分！！！

```js
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // 开启进度条
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
      
    //登录
    if (to.path === '/login') { 
      // 如果已登录，重定向到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')

          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
```

#### ➡ login方法

/src/store/modules/user.js 

点击登录先走调用的这个方法

```js
// user login
  login({ commit }, params) {
    const { username, password } = params
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        console.log(data);
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
```



####  ➡ getInfo方法

登录之后调用这个方法，获取用户信息

/src/store/modules/user.js

```js
 // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        commit('SET_NAME', data.data.name)
        commit('SET_AVATAR', data.data.avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
```

#### ➡ logout方法

退出登录

移除token，重置路由表。

*/src/store/modules/user.js

```js
// user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
```

## 自定义 vuex 参数

xxx全局参数/变量：state=>state.xxx模块.xxx参数/变量

![](instructions\微信截图_20211214195746.png)

```js
name: state => state.user.name

//这个为全局getters  name变量  
//state.user.name  在modules中user模块下的name变量

xxx全局参数/变量：state=>state.xxx模块.xxx参数/变量
```



## 添加页面



![](instructions\微信截图_20211214200323.png)

```bash
在src/views中添加

├──src
   ├──views
      ├──组件名
         ├──components
            ├──xxx.vue
            ├──xxx.vue
         ├──index.vue
         
```



![](instructions\微信截图_20211214201021.png)

```js
在src/router/index中添加

{
    path: '/xxx',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('@/views/组件名/index'),
      meta: { title: '自定义名称', icon: 'el-icon-s-home' }
    }]
  }
```



之后就可以看到新加的页面的

