<template>
    <div class="footer-body">
        <div class="outro-text">
            <h3>What is all about?</h3>
            <p> There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory mentioned, which states that this has already happened.</p>
        </div>
        <div class="quicklink-updates">

        </div>
        <div class="contact">

        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
    .footer-body {
        background-color: #a000f0;
        height: auto;
        width: auto; 
        display: grid;
        grid-template-areas: "outro quicklinks connect";
        grid-template-columns: 2fr 1fr 1fr;
        margin-top: 20px;
    }
    .outro-text {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .outro-text > * {
        width: 80%;
        margin: 10px;

    }

</style>