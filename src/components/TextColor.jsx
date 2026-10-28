import { useState } from 'react'

// Todo 2: พิมพ์ข้อความ + เลือกสี แล้วกด Click เพื่อแสดงข้อความด้วยสีนั้น
function TextColor() {
  const [text, setText] = useState('')
  const [color, setColor] = useState('#ff0080')
  const [shown, setShown] = useState({ text: '', color: '#000000' })

  return (
    <div>
      <p style={{ color: shown.color, fontSize: '22px', minHeight: '30px' }}>{shown.text}</p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => setShown({ text, color })}>Click</button>
    </div>
  )
}

export default TextColor
