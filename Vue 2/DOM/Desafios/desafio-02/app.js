new Vue({
    el: '#app2',
    data:{
        valor: ''
    },
    
    methods:{
        alertar(){
            alert('vc foi avisado!')
        },
        alterar(e){
            this.valor = event.target.value
        }
    }
})