import { Stack } from "./stack";
describe("栈 测试",()=>{
  it("栈",()=>{

    const stack = new Stack<number>()

    stack.push(1,2,3) 

    expect(stack.size).toEqual(3)
    expect(stack.isEmpty()).toEqual(false) 
    expect(stack.toString()).toEqual("1 2 3")
    expect(stack.peek()).toEqual(3)

    stack.pop()
    expect(stack.size).toEqual(2)
    expect(stack.isEmpty()).toEqual(false)
    expect(stack.toString()).toEqual("1 2")
    expect(stack.peek()).toEqual(2)
    
    stack.pop()
    stack.pop()
    expect(stack.isEmpty()).toEqual(true)
  })
})
