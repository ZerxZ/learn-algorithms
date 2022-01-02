const voted = new Map<string,boolean>()

export function checkVoter(name:string) {
  if (voted.has(name)) {
    console.log("kick them out!");
    
  }else{
    voted.set(name,true)
    console.log("let them vote!");
    
  }
}
const cache = new Map<string,string>()

export function getPage(url:string) {
  if (cache.has(url)) {
    return cache.get(url)
  }else{
    const data = getDataFromServer(url)
    cache.set(url,data)
    return data
  }
}
function getDataFromServer(url:string) {
  return `test ${url}`
}
