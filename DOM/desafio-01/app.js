new Vue({
    el:'#desafio',
    data:{
        nome: 'Caio',
        idade: 19,
        imageLink: 'https://files.tecnoblog.net/wp-content/uploads/2020/03/google-imagens.jpg'
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
