<template>
    <section class="bottom-block">
        <div class="container">
            <div class="bottom-block__icons">
                <div class="row">
                    <div class="col-lg-6 bottom-block__icons-item">
                        <img src="../assets/hands.svg" alt="" class="bottom-block__icons-icon">
                        <div class="bottom-block__icons-text">
                            <div class="bottom-block__icons-title">Trusted By</div>
                            <span class="bottom-block__icons-digits">5,000+</span>MSPs
                        </div>
                    </div>
                    <div class="col-lg-6 bottom-block__icons-item">
                        <img src="../assets/shield.svg" alt="" class="bottom-block__icons-icon">
                        <div class="bottom-block__icons-text">
                           <div class="bottom-block__icons-title">Protected</div>
                           <div>
                               <span class="bottom-block__icons-digits">100+ PBs</span> of data in the cloud
                           </div>
                           <div>
                               <span class="bottom-block__icons-digits">100,000+</span> servers and endpoints
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-block__copyright">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 bottom-block__copyright-left">
                        Copyright &copy; 2019	CloudBerry Lab.
                    </div>
                    <div class="col-lg-6 bottom-block__copyright-right">
                        <a href="http://cloudberrylab.com" target="_blank">cloudberrylab.com</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'BottomBlock',
    data () {
        return {
            msg: 'bottom block'
        }
    }
}
</script>
<style lang="scss" scoped>
    .bottom-block{
        &__icons{
            color: #244D71;
            border: 1px solid #E4E4E4;
            padding: 42px 94px;
            margin-bottom: 130px;
            &-item{
                display: flex;
                align-items: center;
            }
            &-icon{
                margin-right: 16px;
            }
            &-text{
                font-size: 16px;
                line-height: 33px;
            }
            &-digits{
                font-size: 24px;
            }
            &-title{
                font-weight: bold;
                font-size: 22px;
                text-transform: uppercase;
                letter-spacing: 1.3px;
            }
        }
    }
    .bottom-block{
        &__copyright{
            background-color: #F2F2F2;
            font-size: 14px;
            height: 48px;
            color: #545454;
            display: flex;
            align-items: center;
            &-right{
                text-align: right;
                a{
                    color: #545454;
                }
            }
        }
    }
  @media(max-width: 991px){
      .bottom-block{
        &__icons-item:first-child{
          margin-bottom: 40px;
        }
        &__icons{
          padding:20px 44px;
        }
      }
  }
</style>
