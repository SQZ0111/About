<script setup lang="ts">
  import AppBody from '@/components/Bodies/AppBody.vue'
import NavigationBar from '@/components/navigation/NavigationBar.vue'
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
      console.log(html.value);
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
    <template #main-content> 
          <div class="about" v-html="html"></div>
    </template>
    <template>
      <p>Some footer</p>
    </template>
  </AppBody>
</template>

<style scoped>
  .about {

  }
  .about > * {
    justify-self: center;
    display: flex;
    justify-content: center;
    width: 80%;
  }
</style>