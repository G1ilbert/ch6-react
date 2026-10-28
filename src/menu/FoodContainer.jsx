import { useState, useEffect } from 'react'
import FoodList from './FoodList'
import FoodForm from './FoodForm'
import styles from './Food.module.css'

const initialFood = [
  { name: 'cake', price: 35, isBestSeller: true },
  { name: 'bread', price: 25, isBestSeller: false },
  { name: 'milk', price: 15, isBestSeller: true },
  { name: 'donut', price: 45, isBestSeller: false },
  { name: 'cookie', price: 55, isBestSeller: true },
]

const FoodContainer = () => {
  const [food, setFood] = useState(initialFood)

  // Todo 2: โหมดปัจจุบันเก็บใน localStorage (refresh แล้วยังจำได้)
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('mode') === 'admin')

  useEffect(() => {
    localStorage.setItem('mode', isAdmin ? 'admin' : 'user')
  }, [isAdmin])

  const deleteItem = (index) => {
    setFood(food.filter((item, i) => i !== index))
  }

  const addItem = (item) => {
    setFood([...food, item])
  }

  return (
    <div>
      <div className={styles.mode}>
        {isAdmin ? 'Admin' : 'User'} Mode{' '}
        <button onClick={() => setIsAdmin(!isAdmin)}>{isAdmin ? 'User' : 'Admin'}</button>
      </div>

      <h3>Our Menu</h3>
      <FoodList food={food} deleteItem={deleteItem} isAdmin={isAdmin} />

      {/* User mode ซ่อนฟอร์ม, Admin mode แสดงฟอร์ม */}
      {isAdmin && <FoodForm addItem={addItem} />}
    </div>
  )
}

export default FoodContainer
