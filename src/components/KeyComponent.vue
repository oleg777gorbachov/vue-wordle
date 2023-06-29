<template>
    <div class="key" v-on:click="setInput(value)" v-bind:class="isShow() ? checkLetter(): ''">
        {{ value }}
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';


export default defineComponent({
    name: "KeyComponent",
    props: {
        value: {type: String, required: true},
    },
    computed: {
        ...mapState(['input', 'boxesLength', 'entered', 'word'])
    },
    methods: {
        ...mapMutations(['setInput']),
        isShow() {
            for (let word of this.entered) {
                if (word.includes(this.value)) return true
            }
            return false 
        },
        checkLetter() {
            let isInclude = false
            for (let wordEntered of this.entered) {
                const index = wordEntered.indexOf(this.value)
                if (this.value === this.word[index]) return 'box-right'
                if (this.word.includes(this.value)) isInclude = true
            }
            if (isInclude)  return "box-in"
            return 'box-failed'
            
        },
    },
})
</script>
<style scoped lang="scss">
    .key {
        padding: 0px 1rem;
        width: 100%;
        height: 3rem;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(29, 153, 236);
        color: white;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
    }

</style>