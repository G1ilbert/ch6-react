import ColorButton from './components/ColorButton'
import TextColor from './components/TextColor'
import Counter from './components/Counter'
import FoodContainer from './menu/FoodContainer'

function App() {
  return (
    <div className="page">
      <h1>ch6 React Todo</h1>

      <section className="card">
        <h2>Todo 1: เปลี่ยนสี button และข้อความเมื่อกดปุ่ม</h2>
        <ColorButton />
      </section>

      <section className="card">
        <h2>Todo 2: แสดงข้อความและสีตามที่กำหนด (onChange)</h2>
        <TextColor />
      </section>

      <section className="card">
        <h2>Todo 3: แสดงตัวเลข เพิ่ม / ลด ตามการกดปุ่ม</h2>
        <Counter />
      </section>

      <section className="card">
        <h2>Menu management + User / Admin mode + CSS</h2>
        <FoodContainer />
      </section>
    </div>
  )
}

export default App
