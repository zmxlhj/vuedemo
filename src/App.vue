<!--
 * @Author: your name
 * @Date: 2020-01-11 16:54:07
 * @LastEditTime : 2020-01-16 16:53:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user">User</router-link>
    </div>
  </div>
</template>

<style scoped>
   #app{
     position: relative;
   }
   #nav{
     position: fixed;
     left: 0;
     bottom: 0;
     width: 100%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     height: 44px;
   }
</style>
