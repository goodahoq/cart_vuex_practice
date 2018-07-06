<template>
    <div class="detail">
        <div class="detail-col">
            <div class="detailImg"></div>
        </div>
        <div class="detail-col text-left">
            <div class="name mB10">{{productList[productId-1].item}}</div>
            <div class="price mB10 ">${{productList[productId-1].price}}</div>
            <div class="size mB10 mT20">
                Size : 
                <select v-model="nowSize" name="size" id="size" class="">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
            </div>
            <div class="num mB10">
                num :  
                <input v-model="nowNum" min="0" :max="sizeInventory" type="number" name="num" id="num">
                <span class="inventory mL10" v-if="nowNum != 0">
                    remaining {{sizeInventory}} pieces
                </span>
                <span class="errorMsg mL10" v-else>Can't be zero</span>
            </div>
            <transition name="fade">
                <button :disabled="nowNum == 0 || isLoading" class="btn mT70" @click="clickAddCart">
                    <span v-if="isLoading" class="spinner"></span>{{buttonMsg}}
                </button>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    name: 'detail',
    data() {
        return {
            productId: this.$route.query.productId,
            nowSize: 'S',
            nowNum: 1,
            isLoading: false,
        }
    },
    mounted() {
        this.updateFee();
    },
    watch: {
        nowNum: function () {
            if (this.nowNum > 20) {
                this.nowNum = 20;
            } else if (this.nowNum < 0) {
                this.nowNum = 1;
            };
        },
    },
    computed: {
        ...mapState(['productList']),
        ...mapGetters(['getCart', 'getFee']),
        buttonMsg() {
            if (this.isLoading) {
                return 'LOADING';
            } else {
                return 'ADD TO CART';
            }
        },
        sizeInventory() {
            return this.productList[this.productId - 1].inventory[this.nowSize]
        }
    },

    methods: {
        ...mapActions(['addCart', 'updateFee']),
        clickAddCart() {
            let args = {
                item: this.productList[this.productId - 1].item,
                price: this.productList[this.productId - 1].price,
                size: this.nowSize,
                num: Number(this.nowNum),
            }
            //number should return to 1
            this.nowNum = 1;
            this.isLoading = true;
            //call action to mutate
            setTimeout(() => {
                this.isLoading = !this.isLoading;
                this.addCart(args);
                this.updateFee();
            }, 1500);

        },
    }
}
</script>

<style lang="scss">
.name {
  font-size: 36px;
}
.price {
  font-size: 30px;
}
.errorMsg {
  color: rgb(224, 95, 95);
}
.inventory {
  font-size: 15px;
}
.text-left {
  text-align: left;
}
.detail-col {
  float: left;
  width: 50%;
}
.detailImg {
  margin: 0 auto;
  background: #cccccc;
  border: 1px solid #aaaaaa;
  width: 300px;
  height: 300px;
}
</style>
