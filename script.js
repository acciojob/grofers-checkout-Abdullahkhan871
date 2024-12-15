const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  //Add your code here
  let totalPrice = 0;
  let table = document.querySelector("table tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let itemsPrice = document.querySelectorAll(".price");
  for (let t of itemsPrice) {
    totalPrice += +t.innerHTML;
  }
  td.innerHTML = totalPrice;
  tr.append(td);
  table.append(tr);
};

getSumBtn.addEventListener("click", getSum);
