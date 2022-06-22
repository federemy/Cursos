const eventBus = {};

eventBus.install = function(Vue) {
  Vue.prototype.$bus = new Vue(); //asi emitimos eventos propios con emit y on
  //en los prototypes podemos agregar comportamiento a los objetos
};

export default eventBus;
