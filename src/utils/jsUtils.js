export const jsUtils = {
  objToString(obj = {}) {
    let ret = ""
    Object.entries(obj).forEach(([k, v]) => {
      ret += `${k}:${v};`
    })
    return ret
  }
}
