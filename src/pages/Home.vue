<template>
    <h1>Homepage</h1>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
ul{
    list-style: none;
    display: flex;
}
nav {
  width: 60%;
  margin: auto;
  float: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
a{
    text-decoration: none;
    display: inline-block;
    color: #eee;
    padding: 0.75rem 1.5rem;
    font-size: 2rem;
    border: 1px solid transparent;
}
header li{
    margin: 0 0.5rem;
    text-decoration: none;
}

a:active,
a:hover,
a.router-link-active{
  border-bottom: 1px solid #eee;
}
</style>