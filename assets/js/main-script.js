function toggle(buttID, divID) {
  let element = document.getElementById(divID);
  let hidden = element.getAttribute("hidden");
  let button = document.getElementById(buttID);

  if (hidden) {
     element.removeAttribute("hidden");
     button.innerText = "Hide Abstract";
     button.className = "buttAbs2";
  } else {
     element.setAttribute("hidden", "hidden");
     button.innerText = "View Abstract";
     button.className = "buttAbs";
  }
}
