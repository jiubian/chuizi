<template>
    <div class="cont" v-if="seen">
      <div v-for="item,index in list" :key="index" v-on:click="dinaji(index)">
        {{item.name}}
      </div>
    </div>
</template>
<script>
  import bus from '../assets/event'
    export default {
        name: "list",
      data(){
          return{
            list:[
              {"name":"熊大"},
              {"name":"熊二"},
              {"name":"熊三"},
            ],
            seen:false
          }
      },
      methods:{
        dinaji(index){
              bus.$emit("list",this.list[index].name)
          this.seen=false
            }

      },
      mounted(){
        var self=this;
        bus.$on("see",function(seen){
          self.seen=seen
        })
      }
    }
</script>

<style scoped>
.cont{
  width:  300px;
  height: 200px;
  border: 1px solid orange;
}
  .cont div{
    width: 100%;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
  }
</style>
