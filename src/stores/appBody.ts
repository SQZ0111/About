
import { reactive } from "vue";

export const appBodyStore = reactive({
    openClose: false,
    isPending: false,
    //rewrite that b.c you should be able to toggle multiple
    toggle() {
        this.openClose = !this.openClose;
    }
})