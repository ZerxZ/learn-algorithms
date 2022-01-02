export class Queue<T>{
item:T[]
constructor(){
  this.item = []
}
enqueue(...element:T[]){
  this.item.push(...element)
}
dequeue(){
  return this.item.shift()
}
front(){
  return this.item[0]
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
