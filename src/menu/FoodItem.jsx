import styles from './Food.module.css'

const FoodItem = ({ item, index, deleteItem, isAdmin }) => {
  return (
    <li className={styles.item}>
      {item.name} - {item.price} baht {item.isBestSeller && '🏅'}
      {/* User mode ซ่อนปุ่มลบ */}
      {isAdmin && (
        <button className={styles.delete} onClick={() => deleteItem(index)}>Del</button>
      )}
    </li>
  )
}

export default FoodItem
