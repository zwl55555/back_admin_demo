import { getList } from "@/request/api";


const state = {
    //初始化列表数据
    list: [],
    //页码
    page: 1,
    //每一页显示多少条
    page_size: 10,
    //总条数
    sum: 0,
}

const mutations = {
    CHANGE_LIST(state, arr) {
        state.list = arr
    },
    CHANGE_PAGE(state, page) {
        state.page = page
    },
    CHANGE_PAGE_SIZE(state, page_size) {
        state.page_size = page_size
    },
    CHANGE_SUM(state, sum) {
        state.sum = parseInt(sum)
    },
}


const actions = {
    reqList(context, params = {}) {
        //用来做分页的
        if (params) {
            //如果携带页码参数修改默认page
            if (params.page) {
                context.commit("CHANGE_PAGE", params.page)
            }
            //如果携带page_size参数修改默认page_size
            if (params.page_size) {
                context.commit("CHANGE_PAGE_SIZE", params.page_size)
            }
        }
        //obj 来定义默认参数 和 传进来的参数
        let obj = params ? params : { page: context.state.page, page_size: context.state.page_size }
        //调用请求数据接口
        getList(obj).then(res => {
            let list = res.data.data.items ? res.data.data.items : []
            //判断当前页数据是否为空，空就page-1   再请求数据
            if (list.length == 0 && context.state.page > 1) {
                console.log(list.length);
                context.commit("CHANGE_PAGE", context.state.page - 1)
                context.dispatch("reqList")
            }
            //修改list数据
            context.commit("CHANGE_LIST", list)
            //修改总条数
            context.commit("CHANGE_SUM", res.data.data.count ? res.data.data.count : 0)
        })
    },

}


const getters = {
    list(state) {
        return state.list
    },
    page(state) {
        return state.page
    },
    page_size(state) {
        return Number(state.page_size)
    },
    sum(state) {
        return state.sum
    },

}


export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}