<template>
    <div id="app">
        <router-view></router-view>
        <!-- <router-view></router-view>里的内容将由根路由对应的组件决定 -->
    </div>
</template>

<script>
import storage from "./storage/index.js";
export default {
    data() {
        return {
            res: {},
        };
    },
    mounted() {
        this.getUser();
        this.getCartCount();
    },
    methods: {
        getUser() {
            this.axios
                .get("/user")
                .then((res = {}) => {
                    this.$store.dispatch("saveUserName", res.username || "");
                })
                .catch((res = {}) => {
                    this.$store.dispatch("saveUserName", res.username || "");
                });
        },
        getCartCount() {
            this.axios.get("/carts/products/sum").then((res = 0) => {
                this.$store.dispatch("saveCartCount", res);
            }).catch((res=0) => {
                this.$store.dispatch("saveCartCount", res);
            })
        },
    },
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>

