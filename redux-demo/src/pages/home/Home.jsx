import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../../components/navigation/Navigation'
import styles from './Home.module.css'
import { useState } from 'react'
import { changeName } from '../../slices/userSlice'



function Home() {

  let username = useSelector((state)=>{return state.user.value})
  let dispatch = useDispatch()
  

  return (
    <>
    <Navigation/>
  
    
    
     <div className={styles.home}>
      Home {username}
      <button onClick={()=>{
        dispatch(changeName("Singh"))
      }}>change redux name</button>
      </div>
     
    </>
  )
}

export default Home
