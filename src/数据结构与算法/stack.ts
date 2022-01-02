export class Stack<T>{
  item:T[] 
  constructor(){
    this.item = []
  }
  push(...element:T[]){
    this.item.push(...element)
  }
  pop(){
    return this.item.pop()
  }
  peek(){
    return this.item[this.item.length - 1]
  }
  get size(){
    return this.item.length
  }
  isEmpty(){
    return this.item.length === 0
  }
  toString(){
    return this.item.join(" ")
  }
}
