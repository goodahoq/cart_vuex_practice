<template>
    <div class="detail">
        <div class="detail-col">
            <div class="detailImg"></div>
        </div>
        <div class="detail-col text-left">
            <div class="name mB10">{{productList[productId-1].item}}</div>
            <div class="price mB10 ">${{productList[productId-1].price}}</div>
            
            <div class="size mB10 mT20">
                <span class="subtitle">Size : </span>
                <el-select class="size-body" v-model="nowSize" placeholder="size">
                    <el-option  value="S">S</el-option>
                    <el-option  value="M">M</el-option>
                    <el-option  value="L">L</el-option>
                </el-select>
            </div>
            <div v-if="maxInputNum != 0" class="num mB10">
                <span class="subtitle">Quantity : </span>
                <el-input-number class="num-body" v-model="nowNum" :min="0" :max="maxInputNum" label="quantity"></el-input-number>
            </div>
            <div class="inventory mL100" v-if="nowNum != 0">
                <small>{{maxInputNum}} left to buy | {{sizeInventory[nowSize]}} in Stock</small>
            </div>
            <div class="errorMsg mL100" v-if="maxInputNum != 0 && nowNum == 0">Can't be zero</div>
            <div v-else class="num outOfStock mB10">
                 <span class="errorMsg mL10" v-if="maxInputNum== 0">Nothing Left To Buy</span>
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
        nowSize() {
            if (this.nowNum >= this.sizeInventory[this.nowSize]) this.nowNum = this.sizeInventory[this.nowSize];
        },
        nowNum() {
            if (this.nowNum > this.maxInputNum) this.nowNum = this.maxInputNum;
        }
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
            return this.productList[this.productId - 1].inventory
        },
        /** 
         * 先取出購物車內對應的數量
         */
        currentItemNum() {
            let currentItem = this.getCart.filter(element => {
                return element.item == this.productList[this.productId - 1].item && element.size == this.nowSize;
            });
            if (Object.keys(currentItem).length !== 0) return currentItem[0].num; //因為item與size會是唯一 -> 等同於id
            else return 0;
        },
        /** 
         * 計算num欄位能輸入的最大值
         */
        maxInputNum() {
            if (this.sizeInventory[this.nowSize] - this.currentItemNum > 0) {
                return this.sizeInventory[this.nowSize] - this.currentItemNum;
            } else {
                return 0;
            }
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
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = !this.isLoading;
                this.addCart(args);
                this.updateFee();

                this.nowNum = 1;
            }, 500);
        },
    }
}
</script>

<style lang="scss">
@import "../assets/base/utils";
.name {
  font-size: 36px;
}
.price {
  font-size: 30px;
}
.size {
  @include flex(start, center);
  padding-right: 60%;
}
.subtitle {
  flex: 1;
}
.size-body,
.num-body {
  flex: 2;
}
.num {
  @include flex(start, center);
  padding-right: 60%;
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
