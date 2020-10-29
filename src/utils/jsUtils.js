export const jsUtils = {
  /**
   * 对象转为字符串:uniapp的style绑定不支持对象格式
   * @param obj js对象
   * @returns {string}
   */
  objToString(/*Object*/obj) {
    let ret = ""
    Object.entries(obj).forEach(([k, v]) => {
      ret += `${k}:${v};`
    })
    return ret
  }
}
