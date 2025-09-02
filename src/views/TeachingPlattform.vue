<script setup lang="ts">
  import AppBody from '@/components/Bodies/AppBody.vue';
import NavigationBar from '@/components/navigation/NavigationBar.vue';
</script>

<template>
  <AppBody>
    <template #header role="navigation">
      <NavigationBar/>
    </template>
    <template #main-content> 
          <h1>Empty Teaching</h1>
    </template>
    <template>
      <p>Some footer</p>
    </template>
  </AppBody>
</template>

<style scoped>

</style>