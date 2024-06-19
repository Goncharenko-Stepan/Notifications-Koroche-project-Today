const sendOrder = document.querySelector(".sendOrder");
const mainForm = document.querySelector(".mainForm");

const sideBarDiv = document.createElement("div");
sideBarDiv.classList.add("sidebar");
sideBarDiv.style.right = "-300px";

const closeBtn = document.createElement("button");
closeBtn.textContent = "Close";
closeBtn.classList.add("close-btn");

sideBarDiv.appendChild(mainForm);
sideBarDiv.appendChild(closeBtn);

document.body.appendChild(sideBarDiv);

sendOrder.addEventListener("click", () => {
  sideBarDiv.style.right = "0";
});

closeBtn.addEventListener("click", () => {
  sideBarDiv.style.right = "-300px";
});
