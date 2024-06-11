import { useContext } from 'react'
import { DataContext } from './App'
import styles from './B1.module.css'

export default function B1(props) {
    let data = useContext(DataContext)
  return (
    <div className={styles.myb}>
        <h1>B1</h1>
        <br/>
        {data.name}</div>
  )
}
