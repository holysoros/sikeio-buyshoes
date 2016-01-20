function makeCartScrollNicely() {
  var cart = document.querySelector(".site__right-sidebar .cart");
  Ps.initialize(cart);
}

window.onload = function() {
  console.log("page loaded");
  makeCartScrollNicely();
}
