function disableClicks(olid) {
    var stuff = document.createElement("div");
    if (olid) {
      stuff.setAttribute("style", "bottom:0;left:0;position:fixed;right:0;top:0");
      stuff.setAttribute("id", olid);
      document.body.appendChild(stuff);
      localStorage.setItem("olid", olid);
    } else {
      stuff.setAttribute("style", "bottom:0;left:0;position:fixed;right:0;top:0");
      stuff.setAttribute("id", "takingClicks");
      document.body.appendChild(stuff);
      localStorage.setItem("olid", "takingClicks");
    }
  }
  function enableClicks() {
    var olid = localStorage.getItem("olid");
    if (!olid) {
      return false;
    } else {
      var olidelem = document.getElementById(olid);
      document.body.removeChild(olidelem);
    }
  }
