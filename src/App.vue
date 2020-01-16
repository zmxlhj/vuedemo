<!--
 * @Author: your name
 * @Date: 2020-01-11 16:54:07
 * @LastEditTime : 2020-01-16 15:45:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user">User</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang='stylus' scoped>
</style>
