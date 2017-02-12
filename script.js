/**
 * Created by Kunal on 2017-02-03.
 */

function getCheckedRadio(radio_group) {
    for (var i = 0; i < radio_group.length; i++) {
        var button = radio_group[i];
        if (button.checked) {
            return button;
        }
    }
    return undefined;
}

function show_hide_ginot(bool) {
    if (bool) {
        document.getElementById("show_hide").style.display = "block";
    }else{
        document.getElementById("show_hide").style.display = "none";
    }

}


function updateRadio() {

    var checkedButton = getCheckedRadio(document.forms["myForm"]["Formulas"]);

    switch (checkedButton.value) {
        case "F/P":
            document.getElementById("ansText").innerText = "Future(F)" + " = ";
            document.getElementById("num").placeholder = "Present" + " Value" + "(P)";
            show_hide_ginot(false);
            break;
        case "P/F":
            document.getElementById("ansText").innerText = "Present(P)" + " = ";
            document.getElementById("num").placeholder = "Future" + " Value" + "(F)";
            show_hide_ginot(false);
            break;
        case "A/F":
            document.getElementById("ansText").innerText = "Annuity(A)" + " = ";
            document.getElementById("num").placeholder = "Future" + " Value" + "(F)";
            show_hide_ginot(false);
            break;
        case "F/A":
            document.getElementById("ansText").innerText = "Future(F)" + " = ";
            document.getElementById("num").placeholder = "Annuity" + " Value" + "(A)";
            show_hide_ginot(false);
            break;
        case "A/P":
            document.getElementById("ansText").innerText = "Annuity(A)" + " = ";
            document.getElementById("num").placeholder = "Present" + " Value" + "(P)";
            show_hide_ginot(false);
            break;
        case "P/A":
            document.getElementById("ansText").innerText = "Future(F)" + " = ";
            document.getElementById("num").placeholder = "Present" + " Value" + "(P)";
            show_hide_ginot(true);
            break;
        case "A/G":
            document.getElementById("ansText").innerText = "Present(P)" + " = ";
            document.getElementById("num").placeholder = "Gradient" + " Value" + "(G)";
            show_hide_ginot(false);
            break;
        default:
             console.log("Improper Radio Factor Selected");

    }
}


function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function iEffective() {
    var i = parseFloat(document.forms["effectiveCalc"]["i"].value / 100);
    var m = document.forms["effectiveCalc"]["m"].value;
    var k = document.forms["effectiveCalc"]["k"].value;

    console.log(" I="+i+" M="+m+" K="+k);

    var out = Math.pow((1+(i/m)),k)-1;

    document.getElementById('Ie').innerHTML = out;
    // console.log(out);
}

function result() {
    var x = document.forms["myForm"]["Formulas"].value;
    var g = document.forms["myForm"]["g"].value;
    var i = document.forms["myForm"]["i"].value;
    i = parseFloat(i / 100);
    var N = document.forms["myForm"]["N"].value;

    console.log("" + x + " " + i + " " + N);

    switch(x) {
        case "F/P":
            var ans = Math.pow((1+i),N)
            // ans = round(ans,4);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "P/F":
            var ans = 1 / Math.pow((1+i),N);
            // ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "A/F":
            var ans = i / (Math.pow((1+i),N) - 1);
            // ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "F/A":
            var ans = (Math.pow((1+i),N)-1)/i;
            // ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "A/P":
            var ans = (i * Math.pow((1+i),N)) / (Math.pow((1+i),N)-1);
            // ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "P/A":
            var ans = (Math.pow((1 + i), N) - 1) / (i * Math.pow((1 + i), N));
            // ans = round(ans,5);

            if (g != "" && parseFloat(g / 100) == i) {
                ans = N / (1 + i);
                document.getElementById("inotVal").innerHTML = ""+ i*100;
            } else if (g != "") {
                // console.log(g);
                g = parseFloat(g / 100);
                i = (((1 + i) / (1 + g)) - 1);

                document.getElementById("inotVal").innerHTML = ""+ i*100;
                // console.log("Inot = " + i);
                ans = (Math.pow((1 + i), N) - 1) / (i * Math.pow((1 + i), N));
                ans = ans / (1 + g);
                console.log(ans);
            }
            document.getElementById("ans").innerHTML = ans;
            break;

        case "A/G":
            var ans = (1/i) - (N/ (Math.pow((1+i),N) -1 ));

            // ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        default:
            alert("Select one of the Factors");
    }

}


function answer() {

    var fact = parseFloat(document.getElementById("ans").innerHTML);
    var num = parseFloat(document.getElementsByName('num')[0].value);

    var finalAns = fact * num;

    document.getElementById("final").innerHTML = finalAns;
}