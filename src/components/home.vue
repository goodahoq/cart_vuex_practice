<template>
    <div class="home">
        <div class="card" v-for="(item,id) in productList">
            <router-link class="card-body" :to="{name:'Detail',query:{productId : id+1}}" :key="item.id">
                <div class="productImg">
                    <img :src="require(`@/assets/img/${item.item}.jpg`)" alt="" class="w100">
                </div>
                <div class="productName">{{item.item}}</div>
                <div class="productPrice">${{item.price}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'home',
    data() {
        return {
        }
    },
    computed: {
        ...mapState([
            'productList'
        ])
    },
}

</script>

<style lang="scss">
@import "../assets/base/utils";
.home {
  font-size: 24px;
  display: flex;
}
.productImg {
  background: #eeeeee;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 30px;
}
.card {
  width: 33%;
  float: left;
  padding: 20px 70px;
}
.card-body {
  border: solid 2px $dark;
  display: block;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.2s ease;
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: $shadow 10px 10px 14px;
    color: $secondary;
    border-color: $secondary;
    .productName,
    .productPrice {
      transform: translate(2px, 2px);
    }
  }
}
.productName,
.productPrice {
  transition: all 0.2s ease-in;
}
</style>
