<template>
    <section class="top-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 top-block__header">
                    <img src="../assets/logo.png" alt="" class="logo">
                    <div class="title">
                        <div class="title__bold">Save up to <span class="green-text">$2,141</span> per year</div>
                        with CloudBerry Managed Backup
                    </div>
                    <div class="sub-title">
                        for the same amount of storage and lisences you pay for with Carbonite
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="calculator">
                        <div class="calculator__left">
                            <div class="calculator__title">CALCULATE YOUR SAVINGS</div>
                            <!-- input -->
                            <label class="calculator__title-inputs" for="workstations">WORKSTATIONS:</label>
                            <input type="number" id="workstations" v-model.number="workstations" value="0" min="0" max="999" @click="rateCheck">
                            <!-- input -->
                            <label class="calculator__title-inputs" for="servers">SERVERS:</label>
                            <input type="number" id="servers" v-model.number="servers" value="0" min="0" max="999" @click="rateCheck">
                            <!-- input -->
                            <label class="calculator__title-inputs calculator__storage-title" for="workstations">Storage, GB:</label>
                            <input type="text" id="storage" :value="totalStorage.storage" class="calculator__storage-value" min="0">

                            <div class="calculator__question">
                                Do you want to discuss your savings
                                with CloudBerry sales engineer?
                            </div>
                            <button class="calculator__btn btn btn-blue"><span>REQUEST A CALL</span></button>
                        </div>
                        <div class="calculator__right">
                            <div class="calculator__title">COST COMPARISON CHART</div>
                            <div class="calculator__diagram-block">
                                <div class="calculator__diagram-block-row calculator__diagram-block-row-1"></div>
                                <div class="calculator__diagram-block-row calculator__diagram-block-row-2"></div>
                                <div class="calculator__diagram-block-row calculator__diagram-block-row-3"></div>
                                <div class="calculator__diagram-block-row calculator__diagram-block-row-4"></div>
                                <div class="calculator__diagram-block-row calculator__diagram-block-row-5"></div>
                                <div class="calculator__diagram-column calculator__diagram-column-1">
                                    <div class="calculator__diagram-price calculator__diagram-price-rate-1">
                                        <div class="calculator__diagram-price-value">${{ sum }}</div> <!-- ///////////////////////  -->
                                        per year
                                    </div>
                                    <div class="calculator__diagram-logo">
                                        <div class="calculator__diagram-icon">
                                            <img src="../assets/ah.svg" alt="">
                                        </div>
                                        <div class="calculator__diagram-text">Ashay</div>
                                    </div>
                                </div>
                                <div class="calculator__diagram-column calculator__diagram-column-2">
                                    <div class="calculator__diagram-save calculator__diagram-save-2">
                                        SAVE<div class="calculator__diagram-save-value">${{ saveAmazon }}</div>
                                    </div>
                                    <div class="calculator__diagram-price calculator__diagram-price-rate-2">
                                        <div class="calculator__diagram-price-value">${{ sumAmazon }}</div> per year
                                    </div>
                                    <div class="calculator__diagram-logo">
                                        <div class="calculator__diagram-icon">
                                            <img src="../assets/cb.svg" alt="">
                                            <img src="../assets/aws.svg" alt="">
                                        </div>
                                        <div class="calculator__diagram-text">CloudBerry and AWS</div>
                                    </div>
                                </div>
                                <div class="calculator__diagram-column calculator__diagram-column-3">
                                    <div class="calculator__diagram-save calculator__diagram-save-3">
                                        SAVE
                                        <div class="calculator__diagram-save-value">${{ saveBackblaze }}</div>
                                    </div>
                                    <div class="calculator__diagram-price calculator__diagram-price-rate-3">
                                        <div class="calculator__diagram-price-value">${{ sumBackblaze }}</div> per year
                                    </div>
                                    <div class="calculator__diagram-logo">
                                        <div class="calculator__diagram-icon">
                                            <img src="../assets/cb.svg" alt="">
                                            <img src="../assets/b2.svg" alt="">
                                        </div>
                                        <div class="calculator__diagram-text">CloudBery and B2 Cloud Storage</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'TopBlock',
    data () {
        return {
            servers: 0,
            workstations: 0
        }
    },
    methods: {
        getLog(){
            console.log ( '%c == Calculator has been mounted ==', 'color: cyan;', '' );
        },
        costCheck(factor){
          let cost;
          cost = this.workstations*33.64 + this.servers*312;
          cost = cost*factor;
          cost = cost + this.totalStorage.addStorage;
          return cost.toFixed(2);
        },
        saveCheck(factor){
          let save;
          let cost;
          let tempCost;
          cost = this.workstations*33.64 + this.servers*312;
          tempCost = cost*factor;
          save = cost - tempCost;
          return save.toFixed(2);
        },
        rateCheck(){
          let rate;
          if(this.workstations > 25 || this.servers > 2){
            rate = 'ultimate';
          }else{
            if(this.workstations < 26 && this.servers > 0 && this.servers < 3){
                rate = 'power';
             }else{
                rate = 'core';
             }
          }
          return rate;
        }
    },
    computed: {
        sum(){
            return this.costCheck(1);
        },
        sumAmazon(){
            return this.costCheck(0.336571);
        },
        sumBackblaze(){
            return this.costCheck(0.1462);
        },

        saveAmazon(){
            return this.saveCheck(0.336571)
        },
        saveBackblaze(){
            return this.saveCheck(0.1462)
        },
        totalStorage(){
            let rate = this.rateCheck();
            // test rate logging begin
            if(rate == 'ultimate'){
                console.log('%c Rate is ' + rate , 'color:red;');
            }else if(rate == 'power'){
                console.log('%c Rate is ' + rate , 'color:yellow;');
            }else{
                console.log('%c Rate is ' + rate , 'color:lime;');
            }
            // test rate logging end
            let storage = 0;
            let addStorage = 0;
            let storageCore = 10000;
            let storagePower = 5120;
            let storageUltimate = 45000;
            storage = this.workstations*500 + this.servers*1000
            if (rate == 'ultimate' && storage > storageUltimate){
                addStorage  = 44496;
            }
            if(rate == 'power' && storage > storagePower){
                addStorage = 4700;
            }
            if(rate == 'core' && storage > storageCore){
                addStorage = 9799
            }
            return {storage, addStorage};
        }
    },
    watch: {

    },
    mounted: function () {
        this.getLog();
    }
}
</script>
<style lang="scss" scoped>
    .top-block{
        padding-top: 50px;
        background-image: url(../assets/bg@1x.jpg);
        background-position: center center;
        // height:982px;
        padding-bottom: 82px;
        margin-bottom: 92px;
        &__header{
            justify-content: center;
            text-align: center;
            color: #fff;
        }
    }
    .logo{
        margin: 0 auto 24px;
        position: relative;
        right: -42px;
    }
    .title{
        width: 100%;
        font-size: 50px;
        line-height: 120%;
        font-weight: 300;
        &__bold{
            font-weight: bold;
        }
    }
    .sub-title{
        width: 100%;
        font-size: 20px;
        line-height: 120%;
        margin-top: 16px;
    }
    .calculator{
        font-size: 16px;
        width: 100%;
        height: 520px;
        background-color: #fff;
        margin-top: 56px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        padding: 54px 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &__title{
            color: #545454;
            margin-bottom: 34px;
        }
        &__title-inputs{
            color: #959595;
            display: block;
            margin-bottom: 10px;
        }
        &__storage{
            color: #545454;
            &-title{
                margin-bottom: 4px;
            }
            &-value{
                height: 24px;
                outline:none;
                border:none;
            }
        }
        &__question{
            text-transform: none;
            font-size: 14px;
            margin-bottom: 10px;
            margin-top: 14px;
        }
        &__btn{
            width: 100%;
        }
        &__left{
            text-transform: uppercase;
            width: 234px;
        }
        &__right{
            width:calc(100% - 234px);
            padding-left: 112px;
        }
        &__diagram-block{
            position: relative;
            display: flex;
            justify-content: space-around;
            height: 254px;
            margin-top: 54px;
            &-row{
                position: absolute;
                height:20%;
                width: 100%;
                border-bottom:1px solid #E9E9E9;
                &:first-child{
                    border-top:1px solid #E9E9E9;
                }
            }
            &-row-1{
                top:0;
            }
            &-row-2{
                top:20%;
            }
            &-row-3{
                top:40%;
            }
            &-row-4{
                top:60%;
            }
            &-row-5{
                top:80%;
            }
            &:before{
                content: "";
                display: block;
                width: 1px;
                height: 106%;
                position: absolute;
                background-color: #E9E9E9;
                left:0;
                bottom:0;
            }
            &:after{
                content: "COST, $ USD";
                display: block;
                color: #959595;
                font-size: 14px;
                position: absolute;
                top: 44%;
                left: -56px;
                -webkit-transform: translateY(-50%) rotate(-90deg);
                -moz-transform: translateY(-50%) rotate(-90deg);
                -ms-transform: translateY(-50%) rotate(-90deg);
                -o-transform: translateY(-50%) rotate(-90deg);
                transform: translateY(-50%) rotate(-90deg);
            }
        }
        &__diagram-column{
            height:100%;
            background: #F3F3F3;
            width: 116px;
            position: relative;
            z-index:1;
            &-1{
                margin-left: 20px;
            }
            &-3{
                margin-right: 20px;
            }
        }
        &__diagram-logo{
            width:100%;
            display: flex;
            text-align: center;
            flex-direction: column;
            position: absolute;
            top: 106%;
        }
        &__diagram-icon{
            margin-bottom: 4px;
            img{
                margin: 0 6px;
            }
        }
        &__diagram-text{
            font-size: 12px;
            color: #545454;
            font-weight: 500;
        }
        &__diagram-price{
            font-size: 14px;
            text-align: center;
            display: flex;
            flex-direction: column;
            font-weight: 500;
            justify-content: center;
            color: #484848;
            &-value{
                font-size: 17px;
            }
            &-rate-1{
                height: 100%;
            }
            &-rate-2{
                height: 70%;
            }
            &-rate-3{
                height: 60%;
            }
        }
        &__diagram-save{
            color: #02AE49;
            border:1px solid #02AE49;
            text-align: center;
            display: flex;
            font-weight: 600;
            flex-direction: column;
            justify-content: center;
            line-height: 25px;
            background: repeating-linear-gradient(135deg, transparent, #CCFFE1, transparent 7px);
            &-2{
                height: 30%;
            }
            &-3{
                height: 40%;
            }
        }
    }
  @media(max-width: 991px){
    .title{
      font-size: 44px;
    }
    .calculator{
      &__right{
        padding-left: 62px;
      }
      &__diagram-block{
        justify-content: space-between;
      }
      &__diagram-column-1{
        margin-left: 0;
      }
      &__diagram-column-2{
        margin-left: 10px;
        margin-right: 10px;
      }
      &__diagram-column-3{
        margin-right: 0;
      }
    }
  }
  @media(max-width:767px){
    .title{
      font-size: 36px;
    }
    .logo{
      right:auto;
     }
    .calculator{
      height:auto;
      flex-direction: column;
      &__right{
        margin-top: 60px;
        padding-left: 0px;
        width: 100%;
        padding-bottom: 60px;
      }
    }
  }
  @media(max-width:480px){
    .calculator{
      padding-bottom: 100px;
    }
  }
</style>
