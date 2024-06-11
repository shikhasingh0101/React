import { useContext } from 'react'
import { DataContext } from './App'

export default function A(props) {

    let data = useContext(DataContext)

  return (
    <div>
        <h1>A</h1>
        <h1>{data.name}</h1>
    </div>
  )
}
