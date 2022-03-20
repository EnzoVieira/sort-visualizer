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

  const delayLoop = (limit: number, func: (i: number) => void, ms: number) => {
    for (let i = 0; i < limit; i++) {
      setTimeout(() => func(i), i * ms)
    }
  }

  const handleBubbleSort = () => {
    const limit = numbersList.length - 1

    delayLoop(
      limit,
      (i) => {
        updateNumbersList((prevState) => {
          return bubbleSort(prevState, i)
        })
      },
      5
    )
  }

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
          // onClick={() => {
          //   delayLoop(
          //     numbersList.length,
          //     () => handleBubbleSort(),
          //     (numbersList.length - 1) * 20
          //   )
          // }}
          onClick={() => {
            // delayLoop(
            //   numbersList.length,
            //   () => handleBubbleSort(),
            //   (numbersList.length - 1) * 5
            // )

            // Loop in each element in list
            for (let step = 0; step < numbersList.length - 1; step++) {
              setTimeout(() => {
                //
                // Compare each element
                for (let i = 0; i < numbersList.length - 1 - step; i++) {
                  setTimeout(() => {
                    updateNumbersList((prevState) => {
                      const newArr = [...prevState]

                      if (newArr[i].number > newArr[i + 1].number) {
                        const tmp = newArr[i]

                        newArr[i] = newArr[i + 1]
                        newArr[i + 1] = tmp
                      }

                      return newArr
                    })
                  }, i * 200)
                }
              }, step * (numbersList.length - 1 - step) * 200)
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
