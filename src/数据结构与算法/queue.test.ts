import { Queue } from "./queue";
describe("队列 测试",()=>{
  it("队列",()=>{
    const queue = new Queue<string>()
    queue.enqueue("鸽子","狐狸","猫","狗")

    expect(queue.size).toEqual(4)
    expect(queue.toString()).toEqual("鸽子 狐狸 猫 狗")

    const { size } = queue
    
    for (let index = 0; index < size; index++) {
      queue.dequeue()
    }
    
    expect(queue.isEmpty()).toEqual(true)
  })

})
