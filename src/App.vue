<template>
  <div>
    <!-- 头部 -->
    <Header/>
    <router-view></router-view>
    <!-- 内容 -->
    <!-- 底部 -->
    <Footer v-if="!$route.meta.isFooterHide"/>
  
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang ="less"scoped>

</style>
