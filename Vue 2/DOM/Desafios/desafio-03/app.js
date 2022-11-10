new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: 37
    },

    watch:{
        valor(){
            setTimeout(() => {
                this.valor = 0
            },5000)
        }
    }

});