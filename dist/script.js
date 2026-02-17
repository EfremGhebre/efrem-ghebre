const navButtons = Array.from(document.querySelectorAll(".rail button"));
const panels = Array.from(document.querySelectorAll(".panel"));
let activeIndex = 0;

const setActive = (nextIndex) => {
  if (nextIndex === activeIndex) return;
  const currentPanel = panels[activeIndex];
  const direction = nextIndex > activeIndex ? "exit-left" : "exit-right";

  currentPanel.classList.add(direction);
  currentPanel.classList.remove("active");
  panels[nextIndex].classList.add("active");

  navButtons.forEach((button, index) => {
    button.setAttribute("aria-current", index === nextIndex ? "page" : "false");
  });

  const cleanup = () => {
    currentPanel.classList.remove("exit-left", "exit-right");
    currentPanel.removeEventListener("transitionend", cleanup);
  };

  currentPanel.addEventListener("transitionend", cleanup);
  activeIndex = nextIndex;

  const panelShell = document.querySelector(".panel-shell");
  if (panelShell) {
    panelShell.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const nextPanel = panels.find((panel) => panel.id === targetId);
    if (!nextPanel) return;
    const nextIndex = Number(nextPanel.getAttribute("data-index"));
    setActive(nextIndex);
  });
});

