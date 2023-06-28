<template>
  <div>
    <input type="number" v-model.number="numberModel">
    <h1>{{numberModel}}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      numberModel: 3
    }
  }
}
</script>