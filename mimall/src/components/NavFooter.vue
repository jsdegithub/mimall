<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt />
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;">JinShuo</a>
            <span>|</span>
            <a href="https://github.com/jsdegithub">我的GitHub地址</a>
            <span>|</span>
            <a href="http://www.aeeternity.com/picga/">Pictures Gallery</a>
            <span>|</span>
            <a href="http://www.aeeternity.com/legou/">Le Gou App</a>
        </div>
        <div class="copyright">
            Copyright ©2020
            <a href="javascript:;"><span class="domain">mi.futurefe.com</span></a> All Rights Reserved.
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            color: #999999;
            display: inline-block;
        }
        span{
            margin: 0 10px;
        }
        margin-bottom: 13px;
    }
    .copyright{
        .domain{
            color: $colorA;
        }
    }
}
</style>