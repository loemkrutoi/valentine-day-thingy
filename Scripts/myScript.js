const { createApp } = Vue

Vue.createApp({
  data() {
    return {
      nameInput: "",
    }
  },
  methods:{
    ButtonOnClick(){
      if(this.nameInput != " " && this.nameInput.length != 0){
        localStorage.setItem("userNameInput", this.nameInput);
        window.location.replace('./iloveyou.html');
      }
    }
  }
}).mount('#app');