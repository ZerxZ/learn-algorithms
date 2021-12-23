import { bynarySeach } from ".";
describe("二分查找测试",()=>{
  test("二分查找", () => {
    const data = [1, 3, 5, 7, 9, 11]
    const result = bynarySeach(data, 3)
    expect(result).toBe(1);
  })

})
