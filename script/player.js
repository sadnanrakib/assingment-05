let count = 0;
// player cart selection  start
function selectbtn(cart) {
  const name = cart.parentNode.childNodes[1].innerText;
  if (count === 5) {
    alert("You Already Selected Five Player..!");
    return;
  }
  count++;

  let countDot = count + ".";
  cart.parentNode.childNodes[3].setAttribute("class", "btn btn-info mt-4 px-5 disabled");
  console.log( cart.parentNode.childNodes[3])
  cart.parentNode.childNodes[3].innerText = "SELECTED";

  const select = document.querySelector("#select");
  const h6 = document.createElement("h6");
  h6.innerHTML = `
            <span>${countDot}</span>
            <span>${name}</span>
    `;
  select.appendChild(h6);

  const button = cart.parentNode.childNodes[3];
  button.disabled = true;
}
// player cart selection end

// calculate start
document.getElementById("calculate").addEventListener("click", function () {
  const perPlayer =Number(document.getElementById("per-player").value);
  
  const textValue = document.getElementById("expenses");
  const textValueInnerText = textValue.innerText;
  if (isNaN(perPlayer)) {
    alert("Please Provide Number...!");
    return;
  }
  if (count === 0) {
    textValue.innerText = perPlayer;
    return;
  }
  textValue.innerText = count * perPlayer;
  
});
console.log(count);
// calculate end

// calculate total start
document.getElementById("calculate-total").addEventListener("click", function () {
  let manager = Number(document.getElementById("manager").value);
  
  let coach =Number (document.getElementById("coach").value);

  const expenses = document.getElementById("expenses");
  const expensesValueInnerText = expenses.innerText;
  const newExpenses = parseFloat(expensesValueInnerText);

  const textValue = document.getElementById("total");
  const textValueInnerText = textValue.innerText;

  textValue.innerText = newExpenses;
  const total = newExpenses + manager + coach;
  textValue.innerText = total;

  if (isNaN(textValue.innerText)) {
    textValue.innerText = "000";
    alert("Please Provide Number...!");
    return;
  }
});
// calculate total end