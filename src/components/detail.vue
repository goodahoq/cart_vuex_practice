<template>
    <div class="detail">
        <div class="detail-col">
            <div class="detailImg">
                <vue-h-zoom class="w100" :image="require(`@/assets/img/${productList[productId-1].item}.jpg`)"
                            :image-full="require(`@/assets/img/${productList[productId-1].item}.jpg`)"
                            :zoom-level="2" :width="300" :height="300" :zoom-window-x="474" :zoom-window-y="53"/>
                <!-- <img :src="require(`@/assets/img/${productList[productId-1].item}.jpg`)" class="w100"> -->
            </div>
        </div>
        <div class="detail-col text-left">
            <div class="detail-body">
                <div class="name mB10">{{productList[productId-1].item}}</div>
                <div class="price mB10 ">${{productList[productId-1].price}}</div>
                <div class="priceLine w54"></div>

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
                    <div class="inventory mL100" v-if="maxInputNum != 0 && nowNum != 0">
                        <small>{{maxInputNum}} left to buy | {{sizeInventory[nowSize]}} in Stock</small>
                    </div>
                    <div class="errorMsg mL100" v-if="maxInputNum != 0 && nowNum == 0">Can't be zero</div>
                </div>
                <div v-else class="num outOfStock mB10">
                    <span class="mL10" v-if="maxInputNum== 0" style="color:rgb(224, 95, 95)">Nothing Left To Buy</span>
                </div>
                <transition name="fade">
                    <button :disabled="nowNum == 0 || isLoading" class="btn-l btn mT50" @click="clickAddCart">
                        <span v-if="isLoading" class="spinner"></span>{{buttonMsg}}
                    </button>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import VueHZoom from 'vue-h-zoom';
export default {
    name: 'detail',
    components: {
        VueHZoom
    },
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
            else this.nowNum = 1;
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
                return element.item == this.productList[this.productId - 1].item &&
                    element.size == this.nowSize;
                //因為item與size會是唯一 -> 等同於id
            });
            if (Object.keys(currentItem).length !== 0) return currentItem[0].num;
            else return 0;
        },
        /** 
         * 計算num欄位能輸入的最大值
         */
        maxInputNum() {
            if (this.sizeInventory[this.nowSize] - this.currentItemNum > 0) {
                return this.sizeInventory[this.nowSize] - this.currentItemNum;
            } else {
                return 0; //因為存貨減掉目前購物車數量不能小於0
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
            /**
             * 假裝非同步
             */
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
  position: relative;
}
.errorMsg {
  color: rgb(224, 95, 95);
  position: absolute;
  top: 20%;
  left: 27%;
}
.inventory {
  font-size: 15px;
  position: absolute;
  top: 20%;
  left: 27%;
}
.text-left {
  text-align: left;
}
.detail-col {
  float: left;
  width: 50%;
}
.detail-body {
  padding: 10px;
}
.detailImg {
  margin: 5% auto;
  border-radius: 3px;
  border: solid 2px $dark;
  width: 300px;
  height: 300px;
}
</style>
