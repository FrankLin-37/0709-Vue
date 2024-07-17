import { defineStore } from "pinia";

export default defineStore("forpinia", {
    state() {
        return{
            location:1,
        }
    },

    getters:{
        pageLocation(){
            return `現在位置:第 ${this.location} 頁`
        }
    },
    actions:{
        setPage(param){
            this.location = param
        }
    },
})