function openMenu() {

    var x = document.getElementById("nav_items");
    if (x.className === "nav_Items") {
        document.getElementById("icon_menu").style.display = "none";
        document.getElementById("icon_menu_close").style.display = "block";
      x.className += " responsive";
    } else {
        x.className = "nav_Items";
        document.getElementById("icon_menu_close").style.display = "none";
        document.getElementById("icon_menu").style.display = "block";
    }
  }