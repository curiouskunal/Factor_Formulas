/**
 * Created by Kunal on 2017-02-03.
 */


function testResults(something) {

    console.log(something);

}

// function FgivenP(i,N) {
//     console.log(eval(1+i)^N));
//
// }

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function result() {
    var x = document.forms["myForm"]["Formulas"].value;
    var i = document.forms["myForm"]["i"].value;
    i = parseFloat(i / 100);
    var N = document.forms["myForm"]["N"].value;

    console.log("" + x + " " + i + " " + N);

    switch(x) {
        case "F/P":
            var ans = Math.pow((1+i),N)
            ans = round(ans,4);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "P/F":
            var ans = 1 / Math.pow((1+i),N);
            ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "A/F":
            var ans = i / (Math.pow((1+i),N) - 1);
            ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "F/A":
            var ans = (Math.pow((1+i),N)-1)/i;
            ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "A/P":
            var ans = (i * Math.pow((1+i),N)) / (Math.pow((1+i),N)-1);
            ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "P/A":
            var ans = (Math.pow((1+i),N)-1) / (i * Math.pow((1+i),N));
            ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "A/G":
            var ans = (1/i) - (N/ (Math.pow((1+i),N) -1 ));

            ans = round(ans,5);
            document.getElementById("ans").innerHTML = ans;
            break;

        default:
            console.log("bye");
    }

}


function answer() {

    var fact = parseFloat(document.getElementById("ans").innerHTML);
    var num = parseFloat(document.getElementsByName('num')[0].value);

    var finalAns = fact * num;

    document.getElementById("final").innerHTML = finalAns;
}