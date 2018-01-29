<template>
  <div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Navbar, Sidebar
  }
}
</script>

<style>

</style>
