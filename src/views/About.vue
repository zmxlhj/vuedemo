<!--
 * @Author: your name
 * @Date: 2020-01-11 16:54:07
 * @LastEditTime : 2020-01-16 16:02:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\About.vue
 -->
<template>
  <div class="about">
    <AboutTmp></AboutTmp>
  </div>
</template>

<script>
import AboutTmp from '@/components/about-tmp.vue'
export default {
  name: 'about',
  components: {
    AboutTmp
  },

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='stylus' scoped>

</style>

