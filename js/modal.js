const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  setTimeout(function() {
    modal.classList.add("show");
  }, 0);
};

span.onclick = function() {
  modal.classList.remove("show");
  setTimeout(function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    setTimeout(function() {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  }
};