const shoppingList = JSON.parse(localStorage.getItem("items")) || [];
const listContainer = document.getElementsByClassName("list-container")[0];
const addItemInput = document.getElementById("item");
const addItemButton = document.querySelector(".add-item-button");
//loop through the initial items
function initialItems() {
    listContainer.innerHTML = "";
  for (let i = 0; i < shoppingList.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = `shopping-list-item`;
    listItem.innerHTML = `<span class="shopping-list-item-${i}">${shoppingList[i]}</span>  <button onclick="markPurchased('shopping-list-item-${i}')" class="mark-purchased-button">mark purchased</button>`;
    listContainer.appendChild(listItem);
  }
  if (shoppingList.length > 0) {
    const clearButton = document.createElement("button");
    clearButton.className = "clear-button";
    clearButton.addEventListener("click", clearList)
    clearButton.textContent = "clear list";
    listContainer.appendChild(clearButton);
  }
};
const markPurchased = (item) => {
   document.getElementsByClassName(item)[0].style.textDecoration ="line-through";

}
function addNewItem(item) {
  shoppingList.unshift(item);
  const items = JSON.parse(localStorage.getItem("items")) || [];
  items.unshift(item);
  localStorage.setItem("items", JSON.stringify(items));
  addItemInput.value = "";
  initialItems();
  window.location.reload();
}
const clearList = () => {
    localStorage.clear()
    initialItems();
    window.location.reload()   
}
addItemButton.addEventListener("click", () => {
  addNewItem(addItemInput.value);
  initialItems();
})
initialItems();