import { db } from '../../services/firebase/index'
import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
import { createAdaptedProducts } from '../../adapter/productsAdapter'


export const useProducts = () => {
    const getProduct = (categoryId) => {
        return new Promise((resolve, reject) => {
            const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
            
            getDocs(collectionRef)
                .then(response=>{
                    const productos = response.docs.map(doc => {
                    return  createAdaptedProducts(doc)
                })
                resolve(productos)
            }).catch(error => {
                reject(error)
            })
        })
    }

    const getProductById = (productId) => {
        return new Promise((resolve, reject) => {
            const docRef = doc(db, 'products', productId)

            getDoc(docRef)
            .then(response=>{
            // const data = response.data()
            const productAdapted = { id: response.id, ...response.data() }
            resolve(productAdapted)
            })
            .catch(error => {
                reject(error)
            })
        })
    }


    return {
        getProduct,
        getProductById,
    }
}


