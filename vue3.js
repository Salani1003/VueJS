const app = new Vue({
   el:"#app",
   data :{
       titulo :"GYM",
       tarea:[],
       nuevaTarea: "",



   },
   methods :{
    agregarTarea : function(){
        this.tarea.push({
            nombre: this.nuevaTarea ,
            estado: false
        });
        this.nuevaTarea =""
        localStorage.setItem('gym-vue', JSON.stringify(this.tarea))
    },
    cambiarEstado :function(index){
        this.tarea[index].estado = true
        localStorage.setItem('gym-vue', JSON.stringify(this.tarea))
    },
    eliminar : function(index){
        this.tarea.splice(index,1)
        localStorage.setItem('gym-vue', JSON.stringify(this.tarea))
    }
   },
   created : function(){
       let datoDB = JSON.parse(localStorage.getItem('gym-vue'))
       if(datoDB === null){
           this.tarea = []
       } else {
           this.tarea = datoDB
       }
   }

   
})