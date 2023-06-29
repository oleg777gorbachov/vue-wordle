import { getWord } from "@/assets/wordsHandler";
import { createStore } from "vuex";

interface Store {
  input: string;
  current: number;
  boxesLength: number;
  word: string;
  entered: string[];
  gameState: "PLAYING" | "LOSE" | "WIN";
}

export default createStore<Store>({
  state() {
    return {
      input: "",
      current: 1,
      boxesLength: 5,
      word: getWord(5),
      entered: [],
      gameState: "PLAYING",
    };
  },
  mutations: {
    resetGame: (state) => {
      state.input = "";
      state.current = 1;
      state.word = getWord(state.boxesLength);
      state.entered = [];
      state.gameState = "PLAYING";
    },
    setInput: (state, str: string) => {
      if (
        str.toLowerCase() === "enter" &&
        state.input.length == state.boxesLength
      ) {
        state.current = state.current + 1;
        state.entered.push(state.input);

        if (state.input.toLowerCase() === state.word.toLowerCase()) {
          state.gameState = "WIN";
          state.input = "";
          return;
        }
        if (state.current > state.boxesLength) {
          state.gameState = "LOSE";
        }

        state.input = "";
        return;
      }

      if (str.toLowerCase() === "backspace") {
        state.input = state.input.slice(0, state.input.length - 1);
        return;
      }

      if (
        state.input.length < state.boxesLength &&
        str.match(/[a-zA-Z]/g) &&
        str.length === 1
      ) {
        state.input = state.input + str;
      }
    },
    setBoxes: (state, length: number) => {
      state.boxesLength = length;
    },
    setNewWord(state, length = 5) {
      state.word = getWord(length);
      state.boxesLength = length;
    },
  },
});
