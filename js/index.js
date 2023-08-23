
// function applybtn(this){
//   let applyButton = document.getElementById('apply-btn')
//   console.log('hello')
// }
 
// const purchaseBtn = document.getElementById(" p-btn")
// purchaseBtn.addEventListener("click", function(){

// })
// if(total <= 0){
//   purchaseBtn.disable = true
// }
// else{
//   purchaseBtn.disable = false 

// }
// const discountPrice = document.getElementById(discount-price);
// const discountInput = document.getElementById(discount-input);
// function cuponClick (){
//   if(discountInput === 'SELL200') 
//   // const discountPrice = document.getElementById(discount-price);


//   discountPrice = total * 0.2;
//   totallPrice  =  total - discountPrice;
// }
// const discountInput = document.getElementById(discount-input);
// const discountPrice = document.getElementById(discount-price);

// console.log('hello')
// let discount  = document.getElementById("discount")
// console.log('hello')

const selectedItemContainer = document.getElementById("shuvo");
 let total = 0;
 function handlesum(event){
  // console.log('this is ')
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
  let totallPrice = document.getElementById("total-price")
  const motPrice = parseFloat(totallPrice.innerText)
  totallPrice.innerText = motPrice
}

let totallPrice = document.getElementById("total-price")
const motPrice = parseFloat(totallPrice.innerText)
function cuponClick(){
  const Total = document.getElementById("total")
  if(document.getElementById("apply-btn").innerText != "SELL200" ){
    alert("Use the right cupon code")
  }
 
}
// cuponClick()
// sumPrice(event)
// console.log("sumPrice")
// function(sumPrice){
//   const tottalPrice = document.getElementById("total-price")
//   const tottalValue = tottalPrice.innerText;
//   const tottalText = parseFloat(tottalValue)
// }

// purchase button enable or disable

// const makePurchase = document.getElementById("make-purchase") 

// function showButton(total){
  
//   if(total <= 0 ){
//     makePurchase.disabled = true;
//   }
//   else {
//     makePurchase.disabled = false;
//   }
// }
// const Total = document.getElementById("total")
// const makePurchase = document.getElementById("make-purchase")
// let price = 0 ;
// function btnAction(){
//   Total.textContent = price;
//   if(price <= 1){
//     makePurchase.disabled = false;
//   }
//   else{
//     makePurchase.disabled = true;
//   }
// }
// makePurchase.addEventListener("click", () => {
// btnAction();
// })