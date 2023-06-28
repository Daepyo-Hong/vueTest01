<template>
  <div>
    <input type="text" v-model="valueModel"/>
    <h1>hello, {{valueModel}}</h1>
    <label>{{valueModel}}</label>
  </div>
</template>
<script>
export default {
  data(){
    return {
      valueModel: 'South Korea'
    };
  }
}
</script>