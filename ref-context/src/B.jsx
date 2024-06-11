import styles from './B.module.css'
import B1 from "./B1"

export default function B() {
  return (
    <div className={styles.hello}>
        <h1>B</h1>
        <B1/>
    </div>
  )
}