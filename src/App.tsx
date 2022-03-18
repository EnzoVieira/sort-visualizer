import { useEffect, useState } from "react"
import "./App.css"

// Utils
import { shuffle } from "./utils/array"

function App() {
  const [numbersList, updateNumbersList] = useState<number[]>([])

  useEffect(() => {
    const arr: number[] = []

    for (let i = 1; i <= 100; i++) {
      arr.push(i)
    }

    shuffle(arr)
    updateNumbersList(arr)
  }, [])
  return (
    <div className="App">
      <main className="container">
        <div className="bars-container">
          {numbersList.map((height) => {
            return <div className="bar" style={{ height: `${height}%` }}></div>
          })}
        </div>
      </main>
    </div>
  )
}

export default App
