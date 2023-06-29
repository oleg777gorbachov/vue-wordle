<template>
  <MainPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex';
import MainPage from './pages/MainPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainPage,
  },
  computed: {
    ...mapState(['input', 'boxesLength'])
  },
  methods: {
    ...mapMutations(['setInput'])
  },
  mounted() {
      document.body.addEventListener('keyup', (event: KeyboardEvent) => {
        const key = event.key
        this.setInput(key)
      })
  }
});
</script>

<style lang="scss">
#app {
  padding: 4px;
}

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
}

.box-right {
  background-color: rgb(56, 224, 41) !important;
}

.box-in {
  background-color: rgb(218, 215, 52) !important;
}

.box-failed {
  background-color: rgb(238, 81, 81) !important;
}

</style>
