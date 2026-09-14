export function startDroneAnimation() {
  const demo = document.querySelector(".demo");

  if (!demo) return;

  if (demo.classList.contains("s--processing")) {
    return;
  }

  demo.classList.add("s--processing");

  setTimeout(() => {
    demo.classList.add("s--reverting");
  }, 8500);

  setTimeout(() => {
    demo.classList.remove(
      "s--processing",
      "s--reverting"
    );
  }, 10000);
}