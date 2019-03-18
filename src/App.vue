<template>
  <div id="app">
    <TopBlock></TopBlock>
    <MiddleBlock></MiddleBlock>
      <MidBotBlock></MidBotBlock>
    <BottomBlock></BottomBlock>
  </div>
</template>
<script>
import TopBlock from './components/TopBlock'
import MiddleBlock from './components/MiddleBlock'
import MidBotBlock from './components/MidBotBlock'
import BottomBlock from './components/BottomBlock'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      TopBlock, MiddleBlock, MidBotBlock, BottomBlock
  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style lang="scss">
  ::-moz-selection {
      background-color: darken(#1583DA, 20%);
      color: #fff;
  }
  ::selection {
      background-color: darken(#1583DA, 20%);
      color: #fff;
  }
  input[type="text"],
  input[type="number"],
  input[type="tel"],
  input[type="password"],
  input[type="email"]{
      margin-bottom: 24px;
      outline:none;
      border:1px solid #BABABA;
      height: 40px;
      width:100%;
      padding-left: 12px;
      padding-right: 12px;
      color: #545454;
  }
  body{
    font-family:Roboto, sans-serif;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li{
      display: inline-block;
      margin: 0 10px;
      a {
        color: #42b983;
      }
    }
  }
  hr{
    background-color: #C4C4C4;
    height: 1px;
    outline:none;
    border:none;
    margin: 16px 0 34px;
  }
  .green-text{
    color: #85FCB6;
  }
    .btn{
        position: relative;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border:none;
        outline:none;
        color: #fff;
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -ms-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
        cursor: pointer;
        overflow: hidden;
        &:after{
            content: "";
            display: block;
            width: 0%;
            height: 110%;
            position: absolute;
            top:0;
            left:-20px;
            -webkit-transition: 0.5s;
            -moz-transition: 0.5s;
            -ms-transition: 0.5s;
            -o-transition: 0.5s;
            transition: 0.5s;
            opacity: 0;
            -webkit-transform: skew(-25deg);
            -moz-transform: skew(-25deg);
            -ms-transform: skew(-25deg);
            -o-transform: skew(-25deg);
            transform: skew(-25deg);
        }
        span{
            position: relative;
            z-index: 2;
        }
        &:hover:after{
            width: 140%;
            opacity: 1;
        }
    }
    .btn-blue{
        background-color: #1583DA;
        &:after{
            background-color: darken(#1583DA, 20%);
        }
    }
    .btn-orange{
        background-color: #ED991D;
        &:after{
            background-color: darken(#ED991D, 20%);
        }
    }
</style>
