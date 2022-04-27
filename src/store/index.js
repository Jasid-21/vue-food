import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    actual_zone: 'Home',
    cart: []
  },
  getters: {
    getZone: function(state) {
      return state.actual_zone;
    },
    getCart: function(state) {
      return state.cart;
    }
  },
  mutations: {
    set_actual_zone(state, value) {
      state.actual_zone = value;
    },
    addToCart(state, prod_id) {
      state.cart.push(prod_id);
    },
    removeFromCart(state, prod_id){
      var cart = state.cart;
      var index = 0;
      for(var i=0; i<cart.length; i++) {
        if(cart[i] == prod_id) {
          cart.splice(i, 1);
          break;
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
