function cityChange() {
    var city = document.getElementById("cities")
    var cityInfo = city.options[city.selectedIndex].value;
    var cityMessage = " ";

    if(cityInfo == 0)
        cityMessage = document.getElementById("nocity").innerHTML;

    else if(cityInfo == 1)
        cityMessage = document.getElementById("whiterun").innerHTML;

    else if(cityInfo == 2)
        cityMessage = document.getElementById("riften").innerHTML;

    else if(cityInfo == 3)
        cityMessage = document.getElementById("markarth").innerHTML;

    else if(cityInfo == 4)
        cityMessage = document.getElementById("solitude").innerHTML;

    else if(cityInfo == 5)
        cityMessage = document.getElementById("falkreath").innerHTML;

    else if(cityInfo == 6)
        cityMessage = document.getElementById("winterhold").innerHTML;

    else if(cityInfo == 7)
        cityMessage = document.getElementById("dawnstar").innerHTML;

    else if(cityInfo == 8)
        cityMessage = document.getElementById("windhelm").innerHTML;

    else if(cityInfo == 9)
        cityMessage = document.getElementById("morthal").innerHTML;

    else if(cityInfo == 10)
        cityMessage = document.getElementById("ravenrock").innerHTML;

    document.getElementById("city_info").innerHTML = cityMessage;
}

function magnify(imgID, zoom) {
    var img, glass, pasta, tomato, bw;
    img = document.getElementById(imgID);

    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    pasta = glass.offsetWidth / 2;
    tomato = glass.offsetHeight / 2;

    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        var position, cheese, sauce;
        e.preventDefault();
        position = getCursorPos(e);
        cheese = position.cheese;
        sauce = position.sauce;
        if (cheese > img.width - (pasta / zoom)) {cheese = img.width - (pasta / zoom);}
        if (cheese < pasta / zoom) {cheese = pasta / zoom;}
        if (sauce > img.height - (tomato / zoom)) {sauce = img.height - (tomato / zoom);}
        if (sauce < tomato / zoom) {sauce = tomato / zoom;}
        glass.style.left = (cheese - pasta) + "px";
        glass.style.top = (sauce - tomato) + "px";
        glass.style.backgroundPosition = "-" + ((cheese * zoom) - pasta + bw) + "px -" + ((sauce * zoom) - tomato + bw) + "px";
    }

    function getCursorPos(e) {
        var a, cheese = 0, sauce = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        cheese = e.pageX - a.left;
        sauce = e.pageY - a.top;
        cheese = cheese - window.pageXOffset;
        sauce = sauce - window.pageYOffset;
        return {cheese : cheese, sauce : sauce};
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}