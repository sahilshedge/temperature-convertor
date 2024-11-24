function convert() {
    let numberinput = parseFloat(document.getElementById("numberinput").value);
    let selectunit = document.getElementById("selectunit").value;
    let convertto = document.getElementById("convertto").value;
    let result;

    if (selectunit == 'Celsius' && convertto == 'Fahrenheit') {
        result = numberinput * 9 / 5 + 32;
    }
    else if (selectunit == 'Fahrenheit' && convertto == 'Celsius') {
        result = (numberinput - 32) * 5 / 9;
        result=result.toFixed(2);
    }
    else {
        result = numberinput;

    }
    result = parseFloat(result);
    console.log(result);

    document.getElementById("displaybar").innerHTML = result;
    document.getElementById("degree").innerHTML = "&deg";
    document.getElementById("logo").innerHTML = convertto.charAt(0);


}




