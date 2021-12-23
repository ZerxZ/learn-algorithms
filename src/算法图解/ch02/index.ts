export function findSmallest<T>(arr:T[]) {
  let smallest = arr[0]
  let smallestIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }
  return smallestIndex
}

export function selectionSort<T>(arr: T[]) {
  let old = [...arr]
  const newArr:T[] = []
  for (let i = 0; i <= arr.length; i++) {
    const smallest = findSmallest(old);
    const test = old.splice(smallest,1)
    newArr.push(...test)
  }
  return newArr
}
