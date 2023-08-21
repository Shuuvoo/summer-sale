
const selectedItemContainer = document.getElementById("shuvo");
 let total = 0;
 function handlesum(event){
  console.log('this is ')
 }
 function handleCLikBtn(target){
const itemName = (target.childNodes[3].childNodes[1].innerText) 
const parentDiv = document.getElementById("selectedItem")
// console.log(parentDiv)
  const li = document.createElement("li");
  li.innerText = itemName;
  parentDiv.appendChild(li);
  totalCalculate(target)

  // const price = target.childNodes[3].childNodes[3].innerText.split(" ")[0];
  // const itemPrice =  parseFloat(price).toFixed(2);
  // let taka = document.getElementById("total");
  // const totalSum = parseFloat(taka.innerText)
  // const totalPrice = parseFloat(itemPrice)+ parseFloat(totalSum)
  // taka.innerText = totalPrice


}

function totalCalculate(target){
  const price = target.childNodes[3].childNodes[3].innerText.split(" ")[0];
  const itemPrice =  parseFloat(price).toFixed(2);
  let taka = document.getElementById("total");
  const totalSum = parseFloat(taka.innerText)
  const totalPrice = parseFloat(itemPrice)+ parseFloat(totalSum)
  taka.innerText = totalPrice
}
