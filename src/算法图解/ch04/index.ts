export function sum(arr:number[]) {
  let total = 0
  for (const key of arr) {
    total += key
  }
  return total
}

function sleep(second:number,callback:()=>void) {
  setTimeout(() => {
    callback()
  }, 1000 * second);
}

export function quicksort<T>(array:T[]):T[] {
  if (array.length < 2) {
    return array
  }else{
    const pivolt = array.shift()
    const less = array.filter(value=>value <= pivolt!)
    const greater = array.filter(value => value > pivolt!)
    console.log(less, pivolt, greater);
    
    return ([] as Array<T>).concat(...quicksort(less), pivolt!, ...quicksort(greater))
  }
}

export function printItem(list:any[]) {
  for (const key of list) {
    console.log(key);
    
  }
}
export function printItem2(list: any[]) {
  for (const key of list) {
    sleep(1, () => { console.log(key)})

    }
}
