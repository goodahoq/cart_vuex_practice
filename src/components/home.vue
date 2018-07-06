<template>
    <div class="home">
        <router-link class="card"
                    v-for="(item,id) in productList"
                    :to="{name:'Detail',query:{productId : id+1}}"
                    :key="item.id">
            <div class="fakeImg"></div>
            <div>{{item.item}}</div>
            <div>${{item.price}}</div>
        </router-link>
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
.home {
  font-size: 24px;
  display: flex;
}
.fakeImg {
  background: #eeeeee;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 1px solid #cccccc;
}
.card {
  width: 33%;
  float: left;
}
</style>
