import "../BubbleSort/BubbleSortVisualizer.css"

// Algorithms
import { IInsertSort, insertSort } from "../../algorithms/insertSort"

interface IProps {
  delay: number
  numbersList: IInsertSort[]

  updateNumbersList: React.Dispatch<React.SetStateAction<IInsertSort[]>>
}

export const InsertSortVisualizer = ({
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
              }}
            ></div>
          )
        })}
      </div>

      <button
        className="sort-btn"
        onClick={() => insertSort(updateNumbersList, numbersList, delay)}
      >
        Sort
      </button>
    </>
  )
}
