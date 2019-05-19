<template>
  <div>
    <div class="img">
      <img src="../assets/logo.png">
    </div>
    <div class="user">{{userName}}</div>
    <div class="welcome">欢迎来到个人中心</div>
    <div class="add">
      <router-link :to="{ name: 'add'}">添加</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
      userName: sessionStorage.getItem('currentUser')
    }
  }
}
</script>
<style lang="stylus" scoped>
.img
  text-align center
.user
  font-weight bold
.user, .welcome
  text-align center
  margin 5px
.add
  text-align center
  margin 20px
  margin-top 40px
  height 35px
  line-height 35px
  background-color #42b983
  border 1px solid #42b983
  border-radius 7px
  a
    text-decoration none
    color #fff
    display block
</style>
