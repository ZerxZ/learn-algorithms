/**
 * 二分查找
 * @param {Array} list 
 * @param {any} item 
 * @return { number |null }
 */
export function bynarySeach<T>(list:T[],item:T) {
  let low = 0
  let high = list.length - 1
  // let count = 1
  while (low <= high) {
    // console.log("count:",count++);
    
    const mid = Math.trunc((low + high) / 2)
    const guess = list[mid]
    if (guess === item) return mid
    if (guess > item) {
      high = mid - 1
    }else {
      low = mid + 1
    }
  }
  return null
}
