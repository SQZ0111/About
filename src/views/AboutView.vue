<script setup lang="ts">
import AppBody from '@/components/body/AppBody.vue';
import NavigationBar from '@/components/navigation/NavigationBar.vue'
import AppFooter from '@/components/footer/AppFooter.vue';
import markdownit from 'markdown-it'
import { onMounted,ref } from 'vue';
import aboutUrl from '@/assets/about.md?url';

const html = ref('Nothing to tell you right now...');
const md = markdownit()

onMounted(async() => {


    try {
      const res = await fetch(aboutUrl);
      const text = await res.text();
      const mdText = md.render(text);
      html.value = mdText;
     
    } catch(e) {
      console.log(`Error: ${e}`);
    }

})
</script>

<template>
  <AppBody>
    <template #header role="navigation">
      <NavigationBar/>
    </template>
    <template class="main" #main-content> 
          <div class="about" v-html="html"></div>
    </template>
    <template #footer-content>
      <AppFooter/>
    </template>
  </AppBody>
</template>

<style scoped>

  .about {
  
    width: 100%;
    display: flex;
    flex-direction: column;

    line-height: 1.5;
    font-size: 14px;
    gap: 10px;

  }

  .about > * {

    width: 50%;
  }

</style>