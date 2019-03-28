<template>
  <ul class="ul">
    <li style="margin-left: 10px;"><img style="vertical-align: middle;width: 100px;"  :src="item.ali_image" alt=""></li>
    <li style="width: 300px;">
      <p>{{item.title}}<span style="font-size:12px;color:red">{{item.spec_json.show_name}}</span></p>
    </li>
    <li style="width: 60px;margin-left: 120px;">￥{{item.price}}</li>
    <li style="margin-left: 30px;">
      <span>{{num}}</span>
    </li>
    <li style="margin-left: 30px;width: 60px;">￥{{item.price*num}}</li>
    <li style="margin-left: 30px">结算</li>
  </ul>
</template>

<script>
  export default {
    props:["item","index"],
    data() {
      return {
        num:1,
        pitch:false
      };
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .ul{
    width: 100%;
    height: 120px;
    line-height: 120px;
    display: flex;
    background: #fff;
    color: #545454;
    button{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: none;
      background: lightgray;
      outline: none;
    }
  }

</style>
