export const shuffle = (array: Array<any>) => {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const findAndRemove = (array: any[], index: number) => {
  const findedIndex = array.findIndex((_, i) => i === index)

  array.splice(findedIndex, 1)
}
