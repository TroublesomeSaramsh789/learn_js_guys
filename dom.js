let name_header = document.querySelector(".hello");
let info = document.querySelector(".info");
let second = document.querySelector(".second");
let username = "Aashihsh";
let input = document.querySelector(".input1");

// createElement()
let child = document.createElement("button");

let newChild = second.cloneNode(true);
child.textContent = "Call Me";

console.log(name_header);

//innerHTML
setTimeout(() => {
  info.innerHTML = "<p>Samip ko Liscense Niskiyo</p>";
}, 1000);
// appendChild()
setTimeout(() => {
  console.log("Database bata Data ayo");
  info.appendChild(child);
}, 2000);
setTimeout(() => {
  info.appendChild(newChild);
}, 3000);

child.addEventListener("click", () => {
  info.innerHTML = `<div>
  <h2>Hello World</h2>
  <p>Maile khana khaye tapai le khanu vayo ???</p>
  <hr />
  <label>${username} ko responce</label>
  <input class="input1" type="text/" />
  <button>Send ME</button>
</div>`;
  console.log("Database bata paisa katyau.");
});

input.addEventListener("change", (e) => {
  console.log(e.target.value);
});
