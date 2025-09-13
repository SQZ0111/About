<script setup lang="ts">
  import AppBody from '@/components/body/AppBody.vue';
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
    <template #footer-content>

    </template>
  </AppBody>
</template>

<style scoped>

</style>