import { bynarySeach } from ".";
const data = [1, 3, 5, 7, 9, 11]
describe("二分查找测试",()=>{
  test("二分查找", () => {
   
    const result = bynarySeach(data, 3)
    expect(result).toBe(1);
  })
  test("二分查找不存在的值", () => {

    const result = bynarySeach(data, 2)
    expect(result).toBe(null);
  })
})
