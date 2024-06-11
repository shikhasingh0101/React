import './ProductList.css'
import Product from './Product'
import { useEffect, useState } from 'react'

function ProductList(){

    let [products,setProducts] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products",{method:"GET"})
        .then((response)=> {
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            setProducts(data)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    })

   
    // let products=[
    // {

    //     id:1,
    //     name:"samsung m51",
    //     price:20000,
    //     imageUrl:"https://images.pexels.com/photos/3659194/pexels-photo-3659194.jpeg?auto=compress&cs=tinysrgb&w=800"
    // }
    // , 
    // {

    //     id:2,
    //     name:"iphone",
    //     price:20000,
    //     imageUrl:"https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600"
    // }
    // ,

    // {

    //     id:3,
    //     name:"fridge",
    //     price:20000,
    //     imageUrl:"https://images.pexels.com/photos/4112602/pexels-photo-4112602.jpeg?auto=compress&cs=tinysrgb&w=600"
    // }
    
    // ]


    return(
        <section className='product_list'>

          

             {
                products.map((prod)=>{
                    return(
                        <Product
                        name={prod.title}
                        imageUrl={prod.image}
                        price={prod.price}
                        />
                    )
                })
            } 


           

            

        </section>
    )
}

export default ProductList