<template>
    <div class="cartPage ">
        <div class="cartContent">
            <div v-if="getCart.length == 0" class="ecahItem-empty">
                <p>ＨＡＶＥ ＮＯＴＨＩＮＧ</p>
                <router-link class="btn" :to="{name:'Home'}">buy</router-link>
            </div>
            <div v-else class="eachItem text-left">
                <div class="eachItem-img">
                </div>
                <div class="eachItem-nameAndSize">
                    <div class="eachItem-name itemAnimated">item</div>
                </div>
                <div class="eachItem-num itemAnimated">quantity</div>
                <div class="eachItem-price itemAnimated">price</div>
                <div class="eachItem-fee itemAnimated">fee</div>
                <div class="eachItem-del itemAnimated">to delete</div>
            </div>
            <div v-for="(item,index) in getCart" 
                class="eachItem text-left">
                <div class="eachItem-img">
                    <div style="display:inline-flex">
                        <router-link class="img" :to="{name:'Detail',query:{productId : getProductName(item.item)}}"></router-link>
                    </div>
                </div>
                <div class="eachItem-nameAndSize">
                    <div class="eachItem-name">{{item.item}}</div>
                    <div class="eachItem-size">size:{{item.size}}</div>
                </div>
                <div class="eachItem-num">
                    <span @click="updateNum(index,1)" class="num-add mR5"><i class="far fa-plus-square"></i></span>
                    {{item.num}}
                    <span @click="updateNum(index,-1)" class="num-del mL5"><i class="far fa-minus-square"></i></span>
                    <div class="eachItem-err">{{errorMsg}}</div>
                </div>
                <div class="eachItem-price"><i class="fas fa-dollar-sign mR5"></i>{{item.price}}</div>
                <div class="eachItem-fee"><i class="fas fa-dollar-sign mR5"></i>{{item.num * item.price}}</div>
                <div @click="delCart(index)" class="eachItem-del itemAnimated text-center"><i class="fas fa-trash-alt fa-2x"></i></div>
            </div>
            <div class="line mB20 mT20"></div>
            <div v-if="getCart.length != 0" class="cart-totalFee text-right mT30">total:  <i class="fas fa-dollar-sign mR5"></i>{{getFee}}</div>
            <div class="btnGroup m30">
                <a @click="emptyCart()" class="btn pull-left">empty cart</a>
                <router-link class="btn pull-right" :to="{name:'Checkout'}">checkout</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    name: "cartPage",
    data() {
        return {
            errorMsg: '',
        }
    },
    mounted() {
        this.updateFee();
    },
    watch: {
        getCart: function () {
            this.updateFee();
        }
    },
    computed: {
        ...mapState(['productList']),
        ...mapGetters(['getCart', 'getFee']),

    },
    methods: {
        ...mapActions(['updateFee', 'delCart', 'emptyCart', 'addNumInCart', 'delNumInCart']),
        /**
         * 在購物車中
         */
        updateNum(index, val) {
            let compareArr = this.productList.filter(ele => {
                return ele.item == this.getCart[index].item
            })
            let compareObj = {};
            compareArr.forEach(ele => {
                compareObj = ele
            })
            let _inventory = compareObj.inventory[this.getCart[index].size];
            /** 邏輯 */
            if (val == 1) {
                if (this.getCart[index].num <= _inventory) {
                    this.addNumInCart(index);
                    this.updateFee();
                } else if (this.getCart[index].num >= _inventory) {
                }
            } else if (val == -1) {
                if (this.getCart[index].num > 1) {
                    this.delNumInCart(index);
                    this.updateFee();
                } else if (this.getCart[index].num == 1) {
                }
            }
        },
        getProductName(val) {
            if (val === 'productA') return 1;
            if (val === 'productB') return 2;
            if (val === 'productC') return 3;
        },
    }
}
</script>

<style lang="scss">
.cartPage {
  padding: 30px 200px;
}
.cartContent {
  padding: 10px;
}
.eachItem {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.eachItem-img {
  flex: 2;
  .img {
    width: 120px;
    height: 120px;
    background: #cccccc;
    border: 1px solid #aaaaaa;
  }
}
.eachItem-nameAndSize {
  flex: 4;
  .eachItem-name {
    font-size: 20px;
  }
}
.num-add,
.num-del {
  cursor: pointer;
}
.eachItem-num {
  flex: 2;
}
.eachItem-price {
  flex: 2;
}
.eachItem-fee {
  flex: 2;
}
.eachItem-del {
  flex: 1;
}
.cart-totalFee {
  padding-right: 10%;
  font-size: 24px;
}
</style>
