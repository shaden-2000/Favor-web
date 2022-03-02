const btns = document.querySelectorAll(".btn");
const services = document.querySelectorAll(".store-service")
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    //console.log(filter)
    services.forEach((item, i) => {
      if(filter == "All"){
        item.style.display = "block"
      }
      else {
        if (item.classList.contains(filter)) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      }

    });

  })
}



/**$(function () {
    $('.multiSelect').selectpicker();
});**/
