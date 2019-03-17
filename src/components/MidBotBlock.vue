<template>
    <section class="midbot-block">
        <div class="container">
            <div class="row">
                <div class="title">
                    <div class="title__bold">CloudBerry Managed Backup Service</div>
                    <div class="sub-title">Leverage AWS, Azure, B2, Wasabi cloud storage to drive more revenue</div>
                </div>
                <div class="midbot-block__btns">
                    <button class="midbot-block__btn btn btn-orange"><span>Free Sign Up</span></button>
                    <button class="midbot-block__btn btn btn-blue"><span>Request a Demo</span></button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'MidBotBlock',
    data () {
        return {
            msg: 'MidBotBlock'
        }
    }
}
</script>
<style lang="scss" scoped>
    .midbot-block{
        height: 332px;
        background-image: url(../assets/bottom_bg.jpg);
        background-position: center center;
        margin-bottom: 74px;
        color: #fff;
        display: flex;
        align-items: center;
        text-align: center;
        &__btns{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .btn{
            margin-left: 10px;
            margin-right: 10px;
            width: 200px;
            font-weight: 500;
            letter-spacing:1px;
        }
    }
    .title{
        width: 100%;
        font-size: 50px;
        line-height: 120%;
        font-weight: 300;
        margin-bottom: 28px;
        &__bold{
            font-weight: 500;
        }
    }
    .sub-title{
        width: 100%;
        font-size: 30px;
        line-height: 120%;
        margin-top: 10px;
    }

</style>
