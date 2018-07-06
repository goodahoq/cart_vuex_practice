import Vue from 'vue'
import mutations from './mutations'
import state from './mutations'

import * as types from './mutaionts_type'

export const addCart = ({
  state,
  commit
}, orderObj) => {
  if (orderObj.num > 0) {
    const cartItem = state.cart.find(ele =>
      ele.item === orderObj.item &&
      ele.size === orderObj.size
    )
    if (!cartItem) {
      commit('ADD_CART', orderObj);
    } else {
      commit('INCREAMENT_ITEM_NUM', {
        item: orderObj.item,
        size: orderObj.size,
        num: orderObj.num
      })
    }
  };
  commit('UPDATE_FEE');
}

export const delCart = ({
  commit
}, num) => {
  commit('DEL_CART', num);
  commit('UPDATE_FEE');
}

export const emptyCart = ({
  commit
}) => {
  commit('EMPTY_CART');
  commit('UPDATE_FEE');
}

export const updateFee = ({
  state,
  commit
}) => {
  commit('UPDATE_FEE');
}

export const addNumInCart = ({
  state,
  commit
}, index) => {
  commit('ADD_NUM_IN_CART', index);
}

export const delNumInCart = ({
  state,
  commit
}, index) => {
  commit('DEL_NUM_IN_CART', index);
}
