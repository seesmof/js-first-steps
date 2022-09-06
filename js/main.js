/* vars */
var items = document.querySelectorAll("#ourList li");
var headline = document.querySelector("#headline");
var add = document.querySelector("#add");
var ourList = document.querySelector("#ourList");
var itemsCount = 6;

/* for loop */
ourList.addEventListener("click", activateItem);

/* functions */
function activateItem(e) {
  if (e.target.nodeName == "LI") {
    headline.innerHTML = e.target.innerHTML;
    for (
      i = 0;
      i < e.target.parentNode.children.length;
      i++
    ) {
      e.target.parentNode.children[i].classList.remove(
        "active"
      );
    }
    e.target.classList.add("active");
  }
}
function create() {
  ourList.innerHTML +=
    "<li>Heading Number " + itemsCount + "</li>";
  itemsCount++;
}

/* button */
add.addEventListener("click", create);
