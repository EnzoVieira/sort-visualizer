import { useEffect, useState } from "react"
import "./App.css"

// Utils
import { shuffle } from "./utils/array"

// Algorithms
import { bubbleSort } from "./algorithms/bubbleSort"

export interface IBar {
  number: number
  current?: boolean
}

function App() {
  const [numbersList, updateNumbersList] = useState<IBar[]>([])

  useEffect(() => {
    const arr: IBar[] = []

    for (let i = 1; i <= 50; i++) {
      arr.push({ number: i })
    }

    shuffle(arr)
    updateNumbersList(arr)
  }, [])

  return (
    <div className="App">
      <main className="container">
        <div className="bars-container">
          {numbersList.map((bar) => {
            return (
              <div className="bar" style={{ height: `${bar.number}%` }}></div>
            )
          })}
        </div>

        <button
          className="sort-btn"
          onClick={() => bubbleSort(updateNumbersList, numbersList)}
        >
          Sort
        </button>
      </main>
    </div>
  )
}

export default App
