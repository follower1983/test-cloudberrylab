<template>
    <section class="middle-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title">Compare Feature Set</div>
                    <hr>
                  <table class="table">
                    <tr class="table__pre-header">
                      <td>&nbsp;</td>
                      <td><img src="../assets/ah.svg" alt=""><span>Ahsay</span></td>
                      <td><img src="../assets/cb.svg" alt=""><span>CloudBerry</span></td>
                    </tr>
                    <tr class="table__header">
                      <td colspan="3">
                        Operating Systems
                      </td>
                    </tr>
                    <tr>
                      <td><span class="i_icon">Windows</span></td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td><span class="i_icon">Linux</span></td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td><span class="i_icon">macOS</span></td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>

                    <tr class="table__header">
                      <td colspan="3" >
                        Backup and Restore Features
                      </td>
                    </tr>
                    <tr>
                      <td>File-level backup</td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td>Image-based backup</td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td>Bare-metal restore</td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td>Server Restore to Cloud VM (Amazon EC2, Azure VM)</td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td>Microsoft SQL Server support</td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td>Microsoft Exchange support</td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td>Encryption and compression</td>
                      <td><span class="has"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td>Bring-Your-Own-Storage (AWS, Azure, B2, Wasabi, and more)</td>
                      <td><span class="has-no"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr class="table__header">
                      <td colspan="3">
                        Features for MSPs
                      </td>
                    </tr>
                    <tr>
                      <td>Full rebranding</td>
                      <td><span class="has-no"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td>Monthly payments option</td>
                      <td><span class="has-no"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                    <tr>
                      <td>Pay-As-You-Go licensing</td>
                      <td><span class="has-no"></span></td>
                      <td><span class="has"></span></td>
                    </tr>
                  </table>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: 'MiddleBlock',
    data () {
        return {
            msg: 'middle block'
        }
    }
}
</script>
<style lang="scss" scoped>
    .middle-block{
        margin-bottom: 82px;
    }
    .title{
      color: #2A4F6F;
      font-size: 30px;
    }
    .table{
      width: 100%;
      border-collapse: collapse;
      tr{
        td{
          border:1px solid #EAEAEA;
          padding: 8px 25px;
          color: #545454;
          font-size: 16px;
          font-weight: 300;
        }
        td:nth-child(2), td:nth-child(3){
          text-align: center;
          width: 27%;
        }
      }
      .table__pre-header{
        background-color: #EEEEEE;
          td{
            padding: 10px;
            img{
              isplay: inline-block;
              vertical-align: middle;
              margin-right: 4px;
            }
            span{
              display: inline-block;
              vertical-align: middle;
            }
          }
      }
      .table__header{
        background-color: #F8F8F8;
        color: #8D8D8D;
        td{
          padding: 20px;
          font-size: 22px;

        }
      }
      .has{
        display: inline-block;
        width: 12px;
        height: 8px;
        -webkit-background-size: contain;
        background-size: contain;
        background-image: url(../assets/check.svg);
        background-position: center center;
        background-repeat:no-repeat;
      }
      .has-no{
        display: inline-block;
        width: 12px;
        height: 10px;
        -webkit-background-size: contain;
        background-size: contain;
        background-image: url(../assets/cross.svg);
        background-position: center center;
        background-repeat:no-repeat;
      }
      .i_icon{
        display: inline-block;
        width: 122px;
        position: relative;
        vertical-align: middle;
        &:after{
            content: "";
            color: #fff;
            display: inline-block;
            width: 16px;
            height: 16px;
            position: absolute;
            -webkit-background-size: contain;
            background-size: contain;
            background-position: center center;
            background-repeat:no-repeat;
            right:0;
            top:0;
            z-index:1;
            background-image: url(../assets/i.svg);
        }
        &:before{
          content: "";
          color: #fff;
          display: inline-block;
          width: 12px;
          height: 12px;
          position: absolute;
          -webkit-background-size: contain;
          background-size: contain;
          background-position: center center;
          background-repeat:no-repeat;
          right:2px;
          top:2px;
          z-index: 2;
          background-image: url(../assets/i_1.svg);
        }
      }
    }
</style>
