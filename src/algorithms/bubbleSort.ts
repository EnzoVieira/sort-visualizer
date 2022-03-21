import { IBar } from "../App"
import { delayLoop } from "../utils/helper"

export const bubbleSort = async (
  updateNumbersList: React.Dispatch<React.SetStateAction<IBar[]>>,
  numbersList: IBar[]
) => {
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

      // Add a delay before each iteration
      await delayLoop(20)
    }
  }
}
