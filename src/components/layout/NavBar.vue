<template>
    <div class="navigation bg-grey-1 text-blue-grey-9">
        <nav>
            <ul class="navigation__list">
                <router-link to="/hot" class="navigation__item">Hot</router-link>
                <router-link to="/new" class="navigation__item">New</router-link>
                <router-link to="/top" class="navigation__item">Top</router-link>
                <router-link to="/rising" class="navigation__item">Rising</router-link>
            </ul>
      </nav> 
    </div>
</template>
<style scoped>
.navigation{
    margin-top: 2rem;
}
ul{
    list-style: none;
    display: flex;
}
nav {
  width: 60%;
  margin: auto;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
a{
    text-decoration: none;
    display: inline-block;
    color: grey;
    padding: 0.75rem 1.5rem;
    font-size: 2rem;
    border: 1px solid transparent;
}
</style>