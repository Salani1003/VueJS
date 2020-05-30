const app = new Vue({
    el: "#app",
    data: {
        titulo: "Hola mundo con vue",
        frutas: ["frutilla", "manzana", "pera"],
        fruta1: [{ nombre: "pera", cantidad: 10 },
        { nombre: "manzana", cantidad: 0 },
        { nombre: "frutilla", cantidad: 15 }],

        nuevafruta: "",
        total:0,

    },

    methods:{
            agregarFruta(){
                this.fruta1.push({
                    nombre: this.nuevafruta, cantidad : 0
                })
                this.nuevafruta =""
            },

    },
    computed:{
        sumarFrutas(){
             
                for(fruta of this.fruta1){
                     this.total+= fruta.cantidad;
                }
                return this.total;
        }
    }

})