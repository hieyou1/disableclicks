function disableClicks(olid) {
    var thing = document.createElement("style");
    var stuff = document.createElement("div");
    if (olid) {
      thing.setAttribute("id", olid + "style");
      document.head.appendChild(thing);
      var thingaselem = document.getElementById(olid + "style");
      thingaselem.innerHTML = "#" + olid + "{bottom:0;left:0;position:fixed;right:0;top:0}";
      stuff.setAttribute("id", olid);
      document.body.appendChild(stuff);
      localStorage.setItem("olid", olid);
    } else {
      thing.setAttribute("id", "takingClicksStyle");
      document.head.appendChild(thing);
      var thingaselem = document.getElementById("takingClicksStyle");
      thingaselem.innerHTML = "#takingClicks{bottom:0;left:0;position:fixed;right:0;top:0}";
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
      var style = document.getElementById(olid + "style");
      var olidelem = document.getElementById(olid);
      document.body.removeChild(style);
      document.body.removeChild(olidelem);
    }
  }
