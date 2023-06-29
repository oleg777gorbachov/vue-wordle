<template>
    <div class="items">
        <div v-for="i in boxes" :key="i" class="box"  v-bind:class="check ? checkLetter(i) : null">
           {{getKey(i)}}
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
    name: "LineComponent",
    props: {
        boxes: {
            type: Number,
            required: true
        },
        input: String,
        check: Boolean
    },
    data() {
        return {
            wordinput: this.input || ""
        }
    },
    computed: {
        ...mapState(['word']),
    },
    watch: {
        input(value) {
            this.wordinput = value || ""
        }
    },
    methods: {
        getKey(num: number): string {
            return this.wordinput[num - 1] || ""
        },
        checkLetter(index: number) {
            const letter = this.getKey(index)
            if (this.word[index - 1].toLowerCase() === letter.toLowerCase()) {
                return 'box-right'
            }
            if (this.word.includes(letter)) {
                return 'box-in'
            }

            return 'box-failed'
        },
    },
})

</script>
<style scoped lang="scss">
    .items {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }
    .box {
        border-radius: 4px;
        margin: 4px 0px;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 24px;
        font-weight: 600;
        background-color: rgb(48, 47, 47);
        text-transform: uppercase;
        transition: all 0.3s;
    }
    
</style>