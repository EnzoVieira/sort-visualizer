import { useEffect, useState } from "react"
import "./App.css"

import {
  BubbleSortVisualizer,
  IBubbleBar,
} from "./Visualizers/BubbleSort/BubbleSortVisualizer"

// Utils
import { shuffle } from "./utils/array"
import { randomIntFrom } from "./utils/helper"
import { InsertSortVisualizer } from "./Visualizers/InsertSort/InsertSortVisualizer"

function App() {
  const [numbersList, updateNumbersList] = useState<IBubbleBar[]>([])
  const [numOfBars, setNumOfBars] = useState(50)

  useEffect(() => {
    const arr: IBubbleBar[] = []

    for (let i = 1; i <= numOfBars; i++) {
      arr.push({
        number: randomIntFrom(10, 100),
        isCurrent: false,
      })
    }

    shuffle(arr)
    updateNumbersList(arr)
  }, [numOfBars])

  return (
    <div className="App">
      <main className="container">
        <BubbleSortVisualizer
          {...{ updateNumbersList, numbersList }}
          delay={20}
        />
        {/* <InsertSortVisualizer
          {...{ updateNumbersList, numbersList }}
          delay={20}
        /> */}
      </main>
    </div>
  )
}

export default App
