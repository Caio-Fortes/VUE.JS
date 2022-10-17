new Vue({
    el:'#desafio',
    data:{
        nome: 'Caio',
        idade: 19,
    },
    methods: {
        multiplicarIdade(){
            return this.idade * 3
        },
        gerarNumAleatorio(){
            return Math.floor(Math.random() * 2)
        },
    }
})