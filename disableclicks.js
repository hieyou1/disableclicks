const clicks = {
    "id": "clicks",
    "on": false,
    "disable": (id = clicks.id) => {
        let div = document.createElement("div");
        div.id = id;
        div.setAttribute("style", "bottom:0;left:0;position:fixed;right:0;top:0;");
        document.body.appendChild(div);
        clicks.id = id;
        clicks.on = true;
    },
    "enable": () => {
        if (clicks.on) document.body.removeChild(document.getElementById(clicks.id));
        clicks.on = false;
    }
};
