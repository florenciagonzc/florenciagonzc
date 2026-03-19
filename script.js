function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openModal() {
  document.getElementById("qrModal").style.display = "block";
}

function closeModal() {
  document.getElementById("qrModal").style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the white box
window.onclick = function(event) {
  let modal = document.getElementById("qrModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
