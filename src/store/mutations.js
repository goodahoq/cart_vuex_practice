import * as types from './mutaionts_type'
import Vue from 'vue'

export const state = {
  productList: [{
      item: 'productA',
      price: 100,
      inventory: {
        'S': 12,
        'M': 8,
        'L': 5
      },
    },
    {
      item: 'productB',
      price: 200,
      inventory: {
        'S': 5,
        'M': 3,
        'L': 6
      },
    },
    {
      item: 'productC',
      price: 300,
      inventory: {
        'S': 9,
        'M': 7,
        'L': 7
      },
    },
  ],
  cart: [{
    item: "productB",
    num: 1,
    price: 200,
    size: "S",
  }],
  totalFee: 0,
}

export const mutations = {
  ['ADD_CART'](state, orderObj) {
    state.cart.push(orderObj);
  },
  ['INCREAMENT_ITEM_NUM'](state, {
    item,
    size,
    num,
  }) {
    const cartItem = state.cart.find(ele =>
      ele.item === item &&
      ele.size === size
    )
    cartItem.num += num;
  },
  ['DEL_CART'](state, num) {
    state.cart.splice(num, 1);
  },
  ['EMPTY_CART'](state) {
    state.cart = [];
  },
  ['UPDATE_FEE'](state) {
    var nowFee = 0;
    state.cart.forEach(ele => {
      nowFee += ele.price * ele.num;
    })
    state.totalFee = nowFee;
  },
  ['ADD_NUM_IN_CART'](state, index) {
    state.cart[index].num += 1;
  },
  ['DEL_NUM_IN_CART'](state, index) {
    state.cart[index].num -= 1;
  },
}
