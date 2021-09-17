// get html element

const panels = document.getElementsByClassName("panel");

// add event listener function

for (const panel of panels) {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
}

// remove active class function

const removeActiveClass = () => {
  for (const panel of panels) {
    panel.classList.remove("active");
  }
};
