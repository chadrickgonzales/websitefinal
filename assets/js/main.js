let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


function showSection(section) {
  document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(section).style.display = 'block';
}

function openPopup() {
  document.getElementById("paymentPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("paymentPopup").style.display = "none";
}

function changeQuantity(amount) {
  let quantityInput = document.getElementById("quantity");
  let totalAmount = document.getElementById("total");

  let currentQuantity = parseInt(quantityInput.value);
  let newQuantity = currentQuantity + amount;

  if (newQuantity > 0) {
      quantityInput.value = newQuantity;
      totalAmount.innerText = `$${newQuantity * 10}`;
  }
}

function removeItem() {
  document.querySelector(".product-card").remove();
}