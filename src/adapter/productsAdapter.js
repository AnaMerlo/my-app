export const createAdaptedProducts = (doc) =>{

    const data = doc.data()

    const productsAdapted = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        description: data.description
    }

    return productsAdapted
}