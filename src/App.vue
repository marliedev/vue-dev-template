<template>
  <div id="app">
    <div id="nav">
    
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <h1 v-if="this.testData.length > 0">Hi {{ this.testData }}</h1>
  </div>
</template>
<script>
import requestHelper from './services/requestHelper'

export default {
  data() {
    return {
      testData: ""
    }
  },
  methods:{
    
  },
  mounted(){
       requestHelper()
        .get("/users?name=martin")
        .then(result => {
          this.testData = result.data[0].nickname
        })
        console.log(this.testData)
  },
};
</script>
