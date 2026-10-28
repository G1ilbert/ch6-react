import { useState } from 'react'

// Todo 3: แสดงตัวเลข เพิ่ม / ลด ตามการกดปุ่ม
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      <button onClick={() => setCount(count - 1)}>Count Down</button>
    </div>
  )
}

export default Counter
