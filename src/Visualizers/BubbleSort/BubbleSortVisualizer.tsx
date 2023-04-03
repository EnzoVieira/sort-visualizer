import "./BubbleSortVisualizer.css"

// Algorithms
import { bubbleSort } from "../../algorithms/bubbleSort"

export interface IBubbleBar {
  number: number
  alreadyChecked?: boolean
  isCurrent?: boolean
  isOrdered?: boolean
}

interface IProps {
  delay: number
  numbersList: IBubbleBar[]

  updateNumbersList: React.Dispatch<React.SetStateAction<IBubbleBar[]>>
}

export const BubbleSortVisualizer = ({
  numbersList,
  updateNumbersList,
  delay,
}: IProps) => {
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
