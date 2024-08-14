const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");
const addButton = document.querySelector("#addButton");

let addItem = function() {
    const itemName = itemInput.value;
    if (itemName) {
        const listItem = document.createElement("li")
        const item = document.createElement("span");
        const deleteButton = document.createElement("button")
        item.textContent = itemName;
        deleteButton.textContent = "Delete"
        itemList.appendChild(listItem);
        listItem.appendChild(item)
        listItem.appendChild(deleteButton);
        itemInput.value = "";

        deleteButton.addEventListener("click", function() {
            deleteItem(listItem);
        });
        itemInput.focus();
    }
}

let deleteItem = function(listItem) {
    itemList.removeChild(listItem);
}

addButton.addEventListener("click", addItem);
itemInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        addItem();
    }
});