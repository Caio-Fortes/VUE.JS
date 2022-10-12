new Vue({
    el: '#desafio',
    data: {
        valor: 'valor'
    },
    methods: {
        exibirAlerta(){
            alert('Você está sendo alertado!')
        },
        mudarValor(evento){
            this.valor = event.target.value
        }
        
    },
})