import { delayLoop } from "../utils/helper"
import { IBubbleBar } from "../Visualizers/BubbleSort/BubbleSortVisualizer"

export const bubbleSort = async (
  updateNumbersList: React.Dispatch<React.SetStateAction<IBubbleBar[]>>,
  numbersList: IBubbleBar[],
  delay: number
) => {
  for (let step = 0; step < numbersList.length - 1; step++) {
    for (let i = 0; i < numbersList.length - 1 - step; i++) {
      updateNumbersList((prevState) => {
        const newArr = [...prevState]

        if (i > 0) newArr[i - 1].isCurrent = false
        newArr[i].isCurrent = true

        if (i === numbersList.length - 2 - step) newArr[i].isOrdered = true

        if (newArr[i].number > newArr[i + 1].number) {
          const tmp = newArr[i]

          newArr[i] = newArr[i + 1]
          newArr[i + 1] = tmp
        } else {
          newArr[i + 1].isCurrent = true
          newArr[i].isCurrent = false

          if (i === numbersList.length - 2 - step)
            newArr[i + 1].isOrdered = true
        }

        return newArr
      })

      // Add a delay before each iteration
      await delayLoop(delay)
    }
  }
}
