import { useState } from 'react'
import styles from './CreateProduct.module.css'
import { useNavigate,Link } from 'react-router-dom'

function CreateProduct() {

    let [product,setProduct] = useState({})
    let navigate = useNavigate()


    function handleInput()
    {
        setProduct({...product,[event.target.name]:event.target.value})
    }

    function handleSubmit()
    {
        event.preventDefault()
        
        fetch("http://localhost:3000/products",{
            method:"POST",
            body:JSON.stringify(product),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            navigate("/products")
        })
        .catch((err)=>{
            console.log(err)
        })

    }


  return (

    <section className={styles.container}>
          <div className={styles.header}>
    <h1 className={styles.container_title}>All Products</h1>
    <Link to="/Products">
        <i class={"fa-solid fa-list "+styles.icon_create}></i>
    </Link> 
</div>

        

        <form className={styles.form} onSubmit={handleSubmit}>

            <input className={styles.inp} type="text" required placeholder='Enter Name' name='name'
            onChange={handleInput} 
            />
            <input className={styles.inp} type="text" required placeholder='Enter Price' name='price' 
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" required placeholder='Enter Quantity' name='quantity' 
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" required placeholder='Enter Image URL' name='image' 
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" required placeholder='Enter Category' name='category' 
            onChange={handleInput}
            />

            <button className={styles.btn} type='submit'>Add Product</button>

          



        </form>


    </section>


  )
}

export default CreateProduct