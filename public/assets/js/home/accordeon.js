const accordionLabels = document.querySelectorAll(".labelAccordion");

accordionLabels.forEach(accordionLabel => {
  accordionLabel.addEventListener("click", Event => {
    accordionLabel.classList.toggle("active")
  })
})