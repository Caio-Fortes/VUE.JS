new Vue({
    el: '#desafio',
    data: ({
        nome: 'Caio',
        idade: 19,
        link: 'https://i.pinimg.com/474x/ea/80/03/ea8003eda835af024292148060887ed4.jpg'
    }),
    methods: {
        multiplicar:function(){
            return this.idade * 3
        },
        aleatorio:function(){
            return Math.floor(Math.random() * 2)
        },
        mudarTexto(evento){
            this.nome = event.target.value

        }
    
    }

})