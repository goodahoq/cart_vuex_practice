<template>
<div>
    <div class="navBar">
        <router-link class="navHome" to="/home">home</router-link>
        <div class="navCart">
            <div @click="showCart=!showCart" class="icon">
                <i class="fas fa-cart-plus"></i>
                <span class="numSum">
                    <small>({{nowNumSum}})</small>
                </span>
            </div>
            <div v-if="showCart" class="floatCart">
                <div v-if="getCart.length == 0" class="empty-item">
                    There is nothing here.
                </div>
                <div class="eachFloat-item" 
                    v-for="(item,key) in getCart">
                    <div class="each-img">
                        <div class="img">
                            <img :src="require(`@/assets/img/${item.item}.jpg`)" class="w100">
                        </div>
                    </div>
                    <div class="each-content">
                        <div class="each-name">{{item.item}}</div>
                        <div class="each-size">size:{{item.size}}</div>
                        <div class="each-price">
                            <span class="numbers">{{item.num}}</span>x
                            <span class="priceOfItem">${{item.price}}</span>
                        </div>
                    </div>
                </div>
                <div v-if="getCart.length != 0" class="eachFloat-footer mT20">
                    <div class="each-fee">total:  ${{getFee}}</div>
                </div>
                <div v-if="getCart.length != 0" class="btnGroup mT20">
                    <router-link @click.native="clickMask" class="btn-s btn pull-left" :to="{name:'CartPage'}">view cart</router-link>
                    <router-link class=" btn-s btn pull-right" :to="{name:'Checkout'}">checkout</router-link>
                </div>
            </div>
            <!-- 控制floatCart遮罩 -->
            <div v-if="showCart" class="mask" @click="clickMask"></div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    name: 'navbar',
    data() {
        return {
            showCart: false,
        }
    },
    computed: {
        ...mapGetters(['getCart', 'getFee']),
        nowNumSum() {
            var num = 0;
            for (let i in this.getCart) {
                num += this.getCart[i].num
            }
            return num;
        }
    },
    methods: {
        clickMask() {
            this.showCart = false;
        }
    }
}
</script>

<style lang="scss">
@import "../assets/base/utils";
.pull-right {
  float: right;
}
.pull-left {
  float: left;
}
.navBar {
  display: inline-block;
  font-size: 24px;
  color: $dark;
  width: 100%;
  background: $primary;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 60px;
}
.navHome {
  float: left;
  margin-left: 15%;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
}
.navCart {
  position: relative;
  float: right;
  margin-right: 15%;
  transition: all 0.3s ease;
  cursor: pointer;
}
.numSum {
  font-size: 12px;
  color: #000;
}
/* floatCart */
.floatCart {
  position: absolute;
  top: 33px;
  right: 0px;
  /** 定位 **/
  width: 350px;
  max-height: 500px;
  background: $light;
  border: 2px solid $dark;
  border-radius: 10px;
  z-index: 2;
  padding: 20px 30px;
  overflow: scroll;
}
.eachFloat-item {
  display: flex;
  padding: 10px 0px;
  border-bottom: 1px dashed $line;
}
.empty-item {
  font-size: 16px;
  color: #aaaaaa;
}
.each-img {
  flex: 1;
  .img {
    width: 100px;
    height: 100px;
    border: 1px solid $dark;
    max-height: 100%;
    overflow: hidden;
  }
}
.each-content {
  padding-left: 15px;
  text-align: left;
  flex: 2;
}
.each-name {
  font-size: 20px;
  margin-bottom: 5px;
}
.each-size {
  margin-bottom: 5px;
  font-size: 18px;
  color: #bbbbbb;
}
.each-price {
  font-size: 28px;
}
.each-fee {
  text-align: right;
}
/* floatCart end*/
.mask {
  background-color: transparent;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
