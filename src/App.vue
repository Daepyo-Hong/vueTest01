<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">DataBinding</router-link> |
    <router-link to="/dataBindingHtml">DataBindingHtml</router-link> |
    <router-link to="/dataBindingInputText">dataBindingInputText</router-link> |
    <router-link to="/dataBindingInputNumber">dataBindingInputNumber</router-link> |
    <router-link to="/dataBindingSelect">dataBindingSelect</router-link> |
    <router-link to="/dataBindingCheckbox">dataBindingCheckbox</router-link> |
    <router-link to="/dataBindingCheckbox2">dataBindingCheckbox2</router-link> |
    <router-link to="/dataBindingRadio">dataBindingRadio</router-link> |
    <router-link to="/dataBindingAttribute">dataBindingAttribute</router-link> |
    <router-link to="/dataBindingButton">dataBindingButton</router-link> |
    <router-link to="/dataBindingClass">dataBindingClass</router-link> |
    <router-link to="/dataBindingClass2">dataBindingClass2</router-link> |
    <router-link to="/dataBindingStyle">dataBindingStyle</router-link> |
    <router-link to="/dataBindingList">dataBindingList</router-link> |
    <router-link to="/renderingVIf">renderingVIf</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
