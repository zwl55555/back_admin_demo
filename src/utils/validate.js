/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
 export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
//效验账号
export function validUsername(str) {
  
  //长度不能 小于  3 大于  10
  return str.length >= 3 && str.length<=10
}

//效验密码
export function validPassword(str) {
  
  //长度不能  小于 6  大于  20
  return str.length >= 6 && str.length<=20
}



