<template>
  <div>
      <div class="nose">
          <ul>
            <li style="color:blue">综合排序</li>
            <li>销量排序</li>
            <li>价格低到高</li>
            <li>价格高到低</li>
          </ul>
      </div>

      <div class="mouse">
        <List v-for="(item,index) in list" :key="index" :item="item"></List>
      </div>

  </div>
</template>

<script>
import Axios from 'axios'
import List from '@/components/list'
export default {
  data () {
    return {
      list:[]
    }
  },
  components:{
    List
  },
  created() {
    Axios.get('http://m.xyucd.com:7000/goods-list').then(res=>{
      // console.log(res.data.data)
      let {data}=res.data;
      this.list=data;
    })
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nose{
  width: 100%;
  height: 40px;
  margin-top: 10px;
  ul{
    width: 27%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    margin-left: 140px;
    font-size: 12px;
    color: gray;
    cursor: pointer;
    li{
      line-height: 40px;
    }
    li:hover{
      color: blue;
    }
  }
}



.mouse{
  background: #fff;
   width: 76%;
   margin-left: 150px;
  height:429px;
  border-radius: 5px;
}
</style>
