<template>
  <div id="app">
    <Search @mouseleave="likai()"></Search>
    <List></List>
  </div>
</template>
<script>
  import Search from '@/components/search'
  import List from '@/components/list'
export default {
  name: 'App',
  components:{
    Search,
    List
  },
  data() {
			return {
			}
		},
  methods:{

  },
		created(){

		}
}
</script>

<style scoped>

</style>
