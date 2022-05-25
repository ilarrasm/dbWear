const imagenes = require.context("../media", true)
const productos =[
        {
            id: 0,
            categoria: "shorts",
            nombre: "Short de Pole Dance",
            descripcion: "El mejor short de poledance del mundo",
            precio: 99.9,
            cantidad: 100,
            img: imagenes("./short1.jpeg")
        },
        {
            
            id: 1,
            categoria: "tops",
            nombre: "Top de Pole Dance",
            descripcion: "El mejor top de poledance del mundo",
            precio: 99.9,
            cantidad: 100,
            img: imagenes("./top1.jpeg")

        },
        {
            
            id: 2,
            categoria: "bragas",
            nombre: "braga de Pole Dance",
            descripcion: "La mejor braga de poledance del mundo",
            precio: 99.9,
            cantidad: 100,
            img: imagenes("./braga1.jpeg")

        },
        {
            
            id: 3,
            categoria: "accesorios",
            nombre: "crema anti-adherente",
            descripcion: "Crema anti-adherente",
            precio: 99.9,
            cantidad: 100,
            img: imagenes("./crema.webp")

        },
        {
            
            id: 4,
            categoria: "shorts",
            nombre: "short 2 de Pole Dance",
            descripcion: "El mejor short de poledance del mundo",
            precio: 99.9,
            cantidad: 200,
            img: imagenes("./short2.jpeg")

        },
        {
            
            id: 5,
            categoria: "tops",
            nombre: "tops 2 de Pole Dance",
            descripcion: "El mejor top de poledance del mundo",
            precio: 99.9,
            cantidad: 200,
            img: imagenes("./top2.jpeg")

        },
        {
            
            id: 6,
            categoria: "bragas",
            nombre: "braga 2 de Pole Dance",
            descripcion: "Altas bragas de poledance del mundo",
            precio: 99.9,
            cantidad: 500,
            img: imagenes("./braga2.jpeg")

        }
];
const categorias = [
        {
            categoria: "Shorts",
            id: 0,
            img: "Short"
            
            
        }, 
        {
            categoria:"Tops",
            id: 1,
            img: "Top"
        }, 
        {
            categoria: "Bragas",
            id: 2,
            img: "Braga"
        }
    ]
           
export default {categorias, productos}