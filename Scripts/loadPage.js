Vue.createApp({
    data() {
      return {
        nameInput: localStorage.getItem("userNameInput"),
      }
    },
}).mount('#name');