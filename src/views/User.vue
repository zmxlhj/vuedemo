<!--
 * @Author: your name
 * @Date: 2020-01-11 17:51:08
 * @LastEditTime : 2020-01-16 16:10:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\views\User.vue
 -->
<template>
  <div class="user">
    <UserTmp></UserTmp>
  </div>
</template>

<script>
import UserTmp from '@/components/user-tmp.vue'
export default {
  name: 'user',
  components: {
    UserTmp
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
