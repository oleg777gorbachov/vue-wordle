<template >
    <div :class="state ? 'modal open' : 'modal'" @click="toggleModal">
        <div class="modal-overlay" @click.stop>
            <slot>
            </slot>
        </div>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ModalComponent",
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            state: this.isOpen
        }
    },
    methods: {
      toggleModal(event: Event) {
        event.stopPropagation()
        console.log(this.state)
        this.state = !this.state 
      }
    },
    watch: {
        isOpen(newVal) {
            this.state = newVal
        }
    }
})
    

</script>
<style scoped lang="scss">
    .modal {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: scale(0.47);
        opacity: 0;
        visibility: hidden;
        z-index: 2;
    }

    .open {
        transform: scale(1);
        opacity: 1;
        visibility: inherit;
    }

    .modal-overlay {
        padding: 1rem 2rem;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0px 0px 15px 2px rgba($color: #000000, $alpha: 0.3);
        position: relative;
    }

</style>