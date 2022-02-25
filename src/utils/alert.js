import Vue from "vue"
const vm = new Vue()

//成功的通知
export const successAlert = (msg)=>{
  vm.$message({
    message: msg,
    type: 'success'
  })
}

//失败的通知
export const warningAlert = (msg)=>{
  vm.$message({
    message: msg,
    type: 'warning'
  })
}