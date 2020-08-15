<template>
  <header class="header">
    <img src="../../assets/AudiLogo.png" />
    <h1>TodoList</h1>
    <div id="nav">
      <p>Demo Project needs to be modifed</p>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>


<script>

export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  background: firebrick;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>
