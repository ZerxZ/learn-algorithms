import { selectionSort } from ".";
const list = [999,1,555,888,333,22]

describe("选择排序测试",()=>{
  // console.log("选择排序测试");
  
  test("选择排序", () => {
    const result = selectionSort(list)
    expect(result).toEqual([1, 22, 333, 555, 888, 999])
  })
})
