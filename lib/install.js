export function install (Vue, options = {}) {
  /**
   * Makes sure that plugin can be installed only once
   */
  if (this.installed) {
    return
  }

  this.installed = true

  // Vue.filter(),

  // // 2. add a global asset
  // Vue.directive('my-directive', {
  //   bind(el, binding, vnode, oldVnode) {
  //     // some logic ...
  //   }
  //   ...
  // })
}
