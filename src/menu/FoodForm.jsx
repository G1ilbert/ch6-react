import { useState } from 'react'
import styles from './Food.module.css'

const emptyInputs = { name: '', price: '', isBestSeller: 'true' }

const FoodForm = ({ addItem }) => {
  const [inputs, setInputs] = useState(emptyInputs)

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newFood = {
      name: inputs.name,
      price: Number(inputs.price),
      isBestSeller: inputs.isBestSeller === 'true',
    }
    addItem(newFood)
    setInputs(emptyInputs)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>New Food</h3>
      <label>
        name : <input type="text" name="name" value={inputs.name} onChange={handleChange} />
      </label>
      <label>
        price : <input type="number" name="price" value={inputs.price} onChange={handleChange} />
      </label>
      <label>
        Best Seller :{' '}
        <select name="isBestSeller" value={inputs.isBestSeller} onChange={handleChange}>
          <option value="true">BestSeller</option>
          <option value="false">Normal</option>
        </select>
      </label>
      <button disabled={inputs.name.trim() === '' || inputs.price === ''}>Add menu</button>
    </form>
  )
}

export default FoodForm
