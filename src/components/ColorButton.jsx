import { useState } from 'react'

// Todo 1: ปุ่มสีน้ำเงิน "Go Red" กดแล้วเป็นสีแดง "Go Blue" และสลับกลับได้
function ColorButton() {
  const [isBlue, setIsBlue] = useState(true)

  const style = {
    backgroundColor: isBlue ? 'blue' : 'red',
    color: 'black',
    fontSize: '18px',
    padding: '8px 16px',
    border: '2px solid gray',
  }

  return (
    <button style={style} onClick={() => setIsBlue(!isBlue)}>
      {isBlue ? 'Go Red' : 'Go Blue'}
    </button>
  )
}

export default ColorButton
