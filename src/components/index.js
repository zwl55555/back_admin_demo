import Vue from "vue"
import vDel from "./Del/del.vue"
import vSearch from "./Search/search.vue"
import vPageturn from "./Pageturn/pageTurn.vue"
import vUpload from "./Upload/index.vue"
let obj={
    vDel,
    vSearch,
    vPageturn,
    vUpload
}

for (let i in obj){
    Vue.component(i,obj[i])
}