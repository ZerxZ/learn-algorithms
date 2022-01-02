export function greet(name:string){
  console.log(`hello,${name}!`);
  greet2(name)
  console.log("getting ready to say bye...");
  bye()  
}

function greet2(name: string) {
  console.log(`how are you,${name}?`);
}
function bye() {
  console.log(`ok bye!`);
  
}
export function fact(x:number):number {
  if (x === 1) {
    return 1
  }else{
    return x * fact(x -1)
  }
}
