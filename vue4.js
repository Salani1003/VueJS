const app = new Vue({
    el : "#app",
    data :{
        message :'',
        contador :0
       


    },
  
    computed:{

        reversa : function (){
            
            return this.message.split('').reverse().join('')
           
        },

        color : function(){
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador <=20,
                'bg-danger' : this.contador > 20

            }
        }

    }
        
})