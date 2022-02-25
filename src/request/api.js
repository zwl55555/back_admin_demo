import { get, post } from "./http.js";

//登录
export const login=(params)=>post("/vue-admin-template/user/login",params)
//获取用户信息
export const getInfo=(params)=>get("/vue-admin-template/user/info",params)
//用户退出登录
export const logout=(params)=>post("/vue-admin-template/user/logout",params)


//========================================列表===========================================
//列表数据
export const getList=(params)=>get("/vue-admin-template/table/list",params)













