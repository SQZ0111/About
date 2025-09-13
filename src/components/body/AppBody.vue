<script  setup lang="ts">
 //Here should be a state that open up a dialog if  the corresponding button within the footer is clicked
 //There should be an emit event in the child footer
 import { appBodyStore } from '@/stores/appBody';
</script>

<template>
    <div class="app-body" :class="appBodyStore.isPending ? 'is-pending' : 'is-not-pending'">
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
    .is-pending {
        cursor: progress;
    }
    .is-not-pending {
        cursor: pointer;
    }
    .pop-up {
        background-color: #fcf3ff;
        z-index: 2;
        width: 200px;
        height: 200px;
        position: absolute;
        right: 15vw;
        bottom: 20vh;
        border: 15px;

    }


</style>
