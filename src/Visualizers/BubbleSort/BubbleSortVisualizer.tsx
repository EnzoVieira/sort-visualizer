import { useEffect, useState } from "react"
import "./BubbleSortVisualizer.css"

// Utils
import { shuffle } from "../../utils/array"
import { randomIntFrom } from "../../utils/helper"

// Algorithms
import { bubbleSort } from "../../algorithms/bubbleSort"

export interface IBubbleBar {
  number: number
  alreadyChecked?: boolean
  isCurrent?: boolean
  isOrdered?: boolean
}

interface IProps {
  numOfBars: number
  delay: number
}

export const BubbleSortVisualizer = ({ numOfBars, delay }: IProps) => {
  const [numbersList, updateNumbersList] = useState<IBubbleBar[]>([])

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
    <>
      <div className="bars-container">
        {numbersList.map((bar) => {
          return (
            <div
              className="bar"
              style={{
                height: `${bar.number}%`,
                backgroundColor: bar.isOrdered
                  ? "green"
                  : bar.isCurrent
                  ? "red"
                  : "black",
              }}
            ></div>
          )
        })}
      </div>

      <button
        className="sort-btn"
        onClick={() => bubbleSort(updateNumbersList, numbersList, delay)}
      >
        Sort
      </button>
    </>
  )
}
