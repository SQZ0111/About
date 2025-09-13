<script setup lang="ts">
import { appBodyStore } from '@/stores/appBody';
import { compile, computed, nextTick, ref } from 'vue';
import {DateTime} from 'luxon';
import {v4 as uuidv4} from 'uuid';

type AnonymousPrintType = {
    id: string,
    timestamp: string,
    feedback: string,
}


const isDeactived = computed(() => appBodyStore.isPending);

const textFeedback =  ref("");

const delay = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
function leaveFeedBack(): void {
    appBodyStore.toggle();
    if (appBodyStore.openClose)
        window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleFeedbackTextAccess(): void {
    appBodyStore.isPending = !appBodyStore.isPending;
}
function createAnonymousPrint(): AnonymousPrintType {
    return {
        id: uuidv4(),
        timestamp: DateTime.utc().toISO(),
        feedback: textFeedback.value
    }
} 
function submitFeedBack(): string {
    console.log(JSON.stringify(createAnonymousPrint()));
    return JSON.stringify(createAnonymousPrint());
}
async function runSubmitTask(): Promise<void> {
    submitFeedBack();
    await delay(600);
}

async function onSubmit(): Promise<void> {
    if(appBodyStore.isPending) return;
    toggleFeedbackTextAccess();
    await nextTick();
    try {
        await runSubmitTask();
    } catch(e) {
        console.log(`Error: ${e}`);
    } finally {
        toggleFeedbackTextAccess();
    }
}

</script>

<template>
    <div class="footer-body">
        <div class="outro-text">
            <h3>What is all about?</h3>
            <p> There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it
                is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable.
                There is another theory mentioned, which states that this has already happened.</p>
        </div>
        <div class="quicklink-updates">
            <h3>Quicklinks</h3>
            <a>Something A</a>
            <a>Something B</a>
            <a>Something C</a>
        </div>
        <div class="contact">
            <button @click="leaveFeedBack" class="feedback-open">Leave Something</button>
        </div>
        <div class="pop-up" v-if="appBodyStore.openClose">
            <h4>Leave note</h4>
            <textarea v-model="textFeedback" :disabled="isDeactived" :class="isDeactived ? 'textarea-inactive': 'teaxtarea-active'"></textarea>
            <button @click="onSubmit">Shoot to space</button>
            <button @click="appBodyStore.toggle">Close</button>
        </div>
    </div>


</template>



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

.outro-text>* {
    width: 80%;
    margin: 10px;

}

.quicklink-updates {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 5px;

}

.quicklink-updates>a:hover {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.quicklink-updates>h3 {
    border-bottom: 2px solid #fcf3ff;
}

.contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
}

.feedback-open {
    height: 20%;
    width: 40%;
    border-radius: 15px;
    background-color: #4d0076;
    color: #fcf3ff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}

.feedback-open:hover {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    color: #ffffff
}

.pop-up {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e4a5ff;
    border: 2px solid #fcf3ff;
    z-index: 1;
    min-height: 200px;
    min-width: 150px;
    width: 30vh;
    height: 40vh;
    position: absolute;
    right: 15vw;
    bottom: 20vh;
    border: 15px;

}

textarea {
    height: 50%;
}

.textarea-active {
    background-color: #ffffff;
    cursor: url('@/assets/pen.ico'), default;
}
.textarea-inctivate {
    background-color: gray;

}


.pop-up>button {
    margin-top: auto;
    height: 20%;
    width: 60%;
    border-radius: 15px;
    background-color: #4d0076;
    color: #fcf3ff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>