import { findAndRemove } from "../utils/array"

export interface IInsertSort {
  number: number
}

export const insertSort = (
  updateNumbersList: React.Dispatch<React.SetStateAction<IInsertSort[]>>,
  numbersList: IInsertSort[],
  delay: number
) => {
  let minimum = numbersList[0]
  let minimumIndex = 0

  for (let i = 0; i < numbersList.length; i++) {
    //   const current = newArr[i]
    //   if (current > minimum) {
    //     minimum = current
    //     minimumIndex = i
    //   }
    //   findAndRemove(newArr, minimumIndex)
  }

  updateNumbersList((prevState) => {
    const newArr = [...prevState]

    newArr.unshift({ number: 5 })

    return newArr
  })
}
