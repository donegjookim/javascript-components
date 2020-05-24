const container = document.getElementById("creatable-container");
const input = document.getElementById("creatable-input");
const labelContainer = document.getElementById("labels-container");

const state = {
  values: [],
};

const createLabel = (value) => {
  const span = document.createElement("span");
  const closeIcon = document.createElement("span");
  closeIcon.className = "close-icon";
  closeIcon.textContent = "\u2716";
  closeIcon.dataset.value = value;
  span.textContent = value;
  span.className = "label";
  span.append(closeIcon);
  labelContainer.append(span);
};

input.addEventListener("keypress", function (event) {
  if (
    event.key === "Enter" &&
    this.value &&
    !state.values.includes(this.value)
  ) {
    state.values.push(this.value);
    createLabel(this.value);
    this.value = "";
  }
});

container.addEventListener("click", function ({ target }) {
  if (target.className.includes("close-icon")) {
    state.values = state.values.filter(
      (value) => value !== event.target.dataset.value
    );
    target.closest(".label").remove();
  }
});
