import { IBar } from "../App"

export const bubbleSort = (prevState: IBar[], i: number) => {
  const newArr = [...prevState]

  if (newArr[i].number > newArr[i + 1].number) {
    const tmp = newArr[i]

    newArr[i] = newArr[i + 1]
    newArr[i + 1] = tmp
  }

  return newArr
}

// onClick={() => {
//   // delayLoop(
//   //   numbersList.length,
//   //   () => handleBubbleSort(),
//   //   (numbersList.length - 1) * 5
//   // )

//   // Loop in each element in list
//   for (let step = 0; step < numbersList.length - 1; step++) {
//     setTimeout(() => {
//       //
//       // Compare each element
//       for (let i = 0; i < numbersList.length - 1 - step; i++) {
//         setTimeout(() => {
//           updateNumbersList((prevState) => {
//             const newArr = [...prevState]

//             if (newArr[i].number > newArr[i + 1].number) {
//               const tmp = newArr[i]

//               newArr[i] = newArr[i + 1]
//               newArr[i + 1] = tmp
//             }

//             return newArr
//           })
//         }, i * 20)
//       }
//     }, step * 1000)
//   }
// }}
