<template>
  <div>
    <div class="cont" >
      <input type="text" placeholder="你喜欢哪只熊"  v-model="name" @click="dian"/>
      <div>搜索</div>
    </div>
  </div>
</template>
<script>
  import bus from '../assets/event'
    export default {

      data(){
          return{
            name:"",
            seen:true
          }
      },
    mounted(){
        var self=this;
        bus.$on("list",function(name){
          self.name=name
        })
    },
      methods:{
    dian(){
      bus.$emit("see",this.seen)
    }
      }
    }
</script>
<style scoped>
.cont{
  width: 300px;
  height:3rem;
  display: flex;
}
  .cont input{
    width: 70%;
    height: 100%;
    border: 1px solid orange;
    background: none;
  }
  .cont div{
    width: 100px;
    height:100%;
    background: orange;
    color: white;
    text-align: center;
    line-height: 3rem;
  }
</style>
