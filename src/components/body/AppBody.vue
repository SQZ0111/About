<script  setup lang="ts">

</script>

<template>
    <div class="app-body">
        <header>
            <slot name="header"></slot>
            </header>
        <main>
            <slot name="main-content"></slot>
        </main>
        <footer>
            <slot name="footer-content"></slot>
        </footer>
    </div>
</template>

<style>
    .app-body {
       
        height:auto;  /*set later to auto */ 
        width: 100%;  
        display: flex;
        flex-direction: column;
        background-color: #a000f0;
        color:#fcf3ff;
        align-items: center;
    }


</style>
