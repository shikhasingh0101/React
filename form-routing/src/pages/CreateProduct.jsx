import './CreateProduct.css'
import React, { useState } from 'react'

function CreateProduct(prop) {

    let [product, setProduct] = useState({})
    function handleInput(){
        // let copyProduct ={ ...product}
        // copyProduct[event.target.name]= event.target.value
        // setProduct(copyProduct)
       
        setProduct({...product,[event.target.name]: event.target.value})
        console.log(product)

    }

    function handleSubmit(){
        event.preventDefault()
        console.log(product)

        fetch("URL",{
            method:"POST",
            body:JSON.stringify(product),
            headers:{
                "Content-Type":"application/json"
            }
        }
        )

        .then((respone)=>{})
        .catch((err)=>{})
    }
  return (

    

    <>

   <section className='form-parent'>

      <form className='form' onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        {name}
        <input className='inp' name='name' type='text' placeholder='Enter Name' 
        onChange={handleInput}/>
        <input className='inp' name='Price'  type='text' placeholder='Enter Price'
        onChange={handleInput}
        />
        <input className='inp' name='category'  type='text' placeholder='Enter Category'
        onChange={handleInput}
        />
        <input className='inp'name='quantity'   type='text' placeholder='Enter Quantity'
        onChange={handleInput}
        />
        <input className='inp' name='discription'  type='text' placeholder='Enter Discription'
        onChange={handleInput}
        />
        <button type='button' className='btn' >ADD</button>

      </form>
   </section>
   </>
  )
}

export default CreateProduct