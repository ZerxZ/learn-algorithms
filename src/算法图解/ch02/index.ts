/**
 * 匹配数组里面最小的值
 * @param {Array} arr 
 * @returns {any}
 */
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
/**
 * 排序选择数组
* @param {Array} arr 
 * @returns {Array}
 */
export function selectionSort<T>(arr: T[]) {
  const max = arr.length
  const newArr:T[] = []
  for (let i = 0; i <= max; i++) {
    const smallest = findSmallest(arr);
    const test = arr.splice(smallest,1)
    newArr.push(...test)
  }
  return newArr
}
