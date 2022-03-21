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

    for (let i = 1; i <= 100; i++) {
      arr.push({ number: i })
    }

    shuffle(arr)
    updateNumbersList(arr)
  }, [])

  const delayLoop = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

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
          onClick={async () => {
            for (let step = 0; step < numbersList.length - 1; step++) {
              for (let i = 0; i < numbersList.length - 1 - step; i++) {
                updateNumbersList((prevState) => {
                  const newArr = [...prevState]

                  if (newArr[i].number > newArr[i + 1].number) {
                    const tmp = newArr[i]

                    newArr[i] = newArr[i + 1]
                    newArr[i + 1] = tmp
                  }

                  return newArr
                })
                await delayLoop(5)
              }
            }
          }}
        >
          Sort
        </button>
      </main>
    </div>
  )
}

export default App
