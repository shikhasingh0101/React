import { useEffect, useState } from 'react'
import './App.css'


function App() {


  let [users,setUsers]= useState([])

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"})

    //fetch returns promise
    .then((response)=>{
      //response returns promise
         return response.json()
    })
    .then((data)=>{
     setUsers(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  //useeffect will be by default called for every  render and rerender
  //passing a blank array will only call it on render

  // let [name,setName] = useState("shikha")
  // let [age,setAge] = useState(17)

  // useEffect(()=>{
  //   console.log("first useeffect ")
  // },[])
  // useEffect(()=>{
  //   console.log("second useeffect")
  // },[age])
 
  return (
    <>

<table>
      
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Website</th>
      </tr>
    
    
      {users.map((user) => (
        <tr>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>
      ))}
    
  </table>


  
    {/* <table>
      <tr>
        <th></th>
        <td> {
      users.map((user)=>{
        return (
          <h1>{user.name}</h1>
        )
      })
      
    }
    </td>

        <td>
          
        </td>
        <td></td>
        </tr>

    {
      users.map((user)=>{
        return (
          <h1>{user.name}</h1>
        )
      })
      
    }

     {
      users.map((user)=>{
        return (
          <h1>{user.username}</h1>
        )
      })
      
    }

{
      users.map((user)=>{
        return (
          <h1>{user.email}</h1>
        )
      })
      
    }

{
      users.map((user)=>{
        return (
          <h1>{user.website}</h1>
        )
      })
      
    }
    
    </table> */}

    


    {/* <h1>welcome {name} {age}</h1>
       <button onClick={()=>{
         setName("palak")
     }}>Change name</button>
      
       <button onClick={()=>{
         setAge(18)
      }}>Change age</button> */}
      
    </>
  )
}

export default App
