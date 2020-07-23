<template>
  <div>
    <order-header></order-header>
    <h1>cart</h1>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
    import OrderHeader from "../components/OrderHeader";
    import NavFooter from '../components/NavFooter';
    export default {
        components: {
            OrderHeader,
            NavFooter
        },
    };
</script>