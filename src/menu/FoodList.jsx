import FoodItem from './FoodItem'
import styles from './Food.module.css'

const FoodList = ({ food, deleteItem, isAdmin }) => {
  return (
    <div>
      <ul className={styles.list}>
        {food.map((item, index) => (
          <FoodItem
            key={index}
            item={item}
            index={index}
            deleteItem={deleteItem}
            isAdmin={isAdmin}
          />
        ))}
      </ul>
    </div>
  )
}

export default FoodList
