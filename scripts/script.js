const sendOrder = document.querySelector(".sendOrder");

sendOrder.addEventListener("click", () => {
  setTimeout(() => {
    const modalWindow = document.createElement("div");
    modalWindow.className = "modalWindow";

    const modalContent = document.createElement("div");
    modalContent.className = "modalContent";

    const paragraf1 = document.createElement("p");
    paragraf1.textContent = "This is paragraph 1.";
    const paragraf2 = document.createElement("p");
    paragraf2.textContent = "This is paragraph 2.";

    modalContent.appendChild(paragraf1);
    modalContent.appendChild(paragraf2);

    for (let i = 0; i < 3; i++) {
      const newButton = document.createElement("button");
      newButton.textContent = `Button ${i + 1}`;
      modalContent.appendChild(newButton);
    }

    modalWindow.appendChild(modalContent);
    document.body.appendChild(modalWindow);

    window.onclick = function (event) {
      if (event.target === modalWindow) {
        document.body.removeChild(modalWindow);
      }
    };
  }, 2000);
});
