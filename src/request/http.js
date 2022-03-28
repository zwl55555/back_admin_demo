import axios from "axios"
import Vue from "vue"
import qs from "qs"
import store from '@/store'
import { getToken, removeToken } from '@/utils/auth'

//配置axios的域名
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
//加载资源的域名
Vue.prototype.$pre = process.env.VUE_APP_BASE_API

/* //开发环境
if (process.env.NODE_ENV === "development") {
    Vue.prototype.$pre = "http://cshf.gzxlwlkj.cn"
}

//生产环境
if (process.env.NODE_ENV === "production") {
    Vue.prototype.$pre = ""
} */

//请求拦截器
axios.interceptors.request.use(config => {
    if (store.getters.token) {

        //请求时在请求头携带token  这个携带参数token根据项目更改
        config.headers['token'] = getToken()
    }
    return config
})
//响应拦截器
axios.interceptors.response.use(res => {
    console.group("本次请求的路径是" + res.config.url);
    console.log(res);
    console.groupEnd("拦截结束")


    //如果token过期
    if (res.data && res.data.code == 40002) {
        removeToken()
        location.reload()
    }

    return res
})


//get请求封装  url 请求地址/路径接口，  params 参数
export const get = (url, params = {}) => {
    return new Promise((reslove, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            reslove(res)
        }).catch(err => {
            reject(err)
        })
    })
}

/*
post请求封装  
    url 请求地址  路径接口
    params  请求传的参数，如果有就传对象类型，如果没有就不传
    isFile 是否有文件，如果有就传true，如果没有就不传，默认false

*/

export const post = (url, params = {}, isFile = false) => {
    let data = null
    if (isFile) {
        data = new FormData()
        for (let i in params) {
            data.append(i, params[i])
        }
    } else {
        data = qs.stringify(params)
    }

    return new Promise((reslovs, reject) => {
        axios.post(url, data).then(res => {
            reslovs(res)
        }).catch(err => {
            reject(err)
        })
    })

}