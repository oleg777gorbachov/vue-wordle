<template>
    <div v-for="i in 5" :key="i">
        <LineComponent :boxes="boxesLength" :input="i === current ? input : i < current ? entered[i - 1] : null" :check="entered[i - 1] ? true : false"/>
    </div>
    <div class="keyboard">
        <div class="keyboardline" >
            <KeyComponent :value="key" v-for="key in keyboardLine1" :key="key"/>
        </div>
        <div class="keyboardline" >
            <KeyComponent :value="key" v-for="key in keyboardLine2" :key="key"/>
        </div>
        <div class="keyboardline">
            <KeyComponent :value="key" v-for="key in keyboardLine3" :key="key"/>
        </div>
    </div>
    <button class="reset" @click="resetGame">
        Reset
    </button>
    <ModalComponent :is-open="gameState !== 'PLAYING' ? true : false">
        <div v-if="gameState === 'WIN'" class="modal">
            <h3>
                Congrats you Won!
            </h3>
            <div>
                <p>
                    You have used <strong>{{ current - 1 }}</strong> attempts
                </p>
                <p>
                    The answer is <strong>{{ word }}</strong>
                </p>
            </div>
            <button @click="resetGame">
                Reset
            </button>
        </div>
        <div v-if="gameState === 'LOSE'" class="modal">
            <h3>
                You Lost!
            </h3>
            <p>
                Don't worry you almost did it!
            </p>
            <p>
                You always can try one more!
            </p>
            <button @click="resetGame">
                Reset
            </button>
        </div>
    </ModalComponent>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';
import LineComponent from '../components/LineComponent.vue'
import KeyComponent from '../components/KeyComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue';

export default defineComponent({
    name: "MainPage",
    components: {
        LineComponent,
        KeyComponent,
        ModalComponent
    },
    data() {
        return {
            keyboardLine1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "p"], 
            keyboardLine2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
            keyboardLine3: ["BackSpace","z", "x", "c", "v", "b", "n", "m", "Enter"]
            
        }
    },
    computed: {
        ...mapState(['boxesLength', 'input', 'current', 'word', 'entered', "gameState"]),
    },
    methods: {
        ...mapMutations(['setInput', 'setCurrent', 'setBoxes', "resetGame"]),
    },
})
    
</script>
<style scoped lang="scss">
    .keyboard {
        margin: 3rem auto 0 auto;
        max-width: 72.5%;
    }
    .keyboardline {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        margin: 4px auto 0 auto;
    }

    .modal {
        text-align: center;
    }
    
    .reset {
        position: fixed;
        top: -4px;
        left: 4px;
    }

    button {
        margin: 8px auto 0 auto;
    }
</style>