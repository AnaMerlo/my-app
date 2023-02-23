const products = [
    {
        id: "1",
        name: "El maravilloso mago de Oz",
        price: 4000,
        category: "Novela",
        img: "https://img.remediosdigitales.com/454b0c/51j8uwts6kl/450_1000.jpg",
        stock: 20,
        description: "lectura a partir de 7 años",
    },
    {
        id: "2",
        name: "Demon Slayer",
        price: 12000,
        category: "Manga",
        img: "https://ae01.alicdn.com/kf/H6eba5fb7043a431aa38c7c44bffad1c0O/5-Books-Anime-Demon-Slayer-Kimetsu-no-Vol-1-5-Yaiba-Japan-Youth-Teens-Fantasy-Science.jpg_Q90.jpg_.webp",
        stock: 6,
        description: "apto para mayores de 15 años",
    },
    {
        id: "3",
        name: "Manual de matematica 1",
        price: 3900 ,
        category: "Escolar",
        img:"https://http2.mlstatic.com/D_NQ_NP_971841-MLA40701952481_022020-O.webp" ,
        stock: 10 ,
        description: "manual de uso escolar",
    },
    {
        id: "4",
        name: "Batman",
        price: 3900 ,
        category: "Comics",
        img:"https://media.revistagq.com/photos/621f76f3e90a38b0c1d2f3e2/master/w_320%2Cc_limit/D4qal3gXkAENcQD.jpg" ,
        stock: 15 ,
        description: "Fácil lectura",
    },
    {
        id: "5",
        name: "El nombre del viento",
        price: 4900 ,
        category: "Novela",
        img:"https://http2.mlstatic.com/D_NQ_NP_897898-MLA41780377374_052020-O.webp" ,
        stock: 10 ,
        description: "Magia, aventura una lectura atrapante de Patrick Rothfuss",
    },
    {
        id: "6",
        name: "El temor de un hombre sabio",
        price: 5000 ,
        category: "Novela",
        img:"https://http2.mlstatic.com/D_NQ_NP_604255-MLA41780382482_052020-O.webp" ,
        stock: 10 ,
        description: "Magia, aventura una lectura atrapante de Patrick Rothfuss",
    },
    {
        id: "7",
        name: "El silencio del viento",
        price: 5000 ,
        category: "Novela",
        img:"https://http2.mlstatic.com/D_NQ_NP_722208-MLA41780310436_052020-O.webp" ,
        stock: 10 ,
        description: "Magia, aventura una lectura atrapante de Patrick Rothfuss",
    },
]

export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) =>{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}