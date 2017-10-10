/**
 * Created by Kunal on 2017-10-10.
 */

//update elements when drop down is selected
document.getElementById('SelectFactor').onchange = function(){

    switch (document.getElementById('SelectFactor').value) {
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
            document.getElementById("ansText").innerText = "Present(P)" + " = ";
            document.getElementById("num").placeholder = "Annuity" + " Value" + "(A)";
            show_hide_ginot(true);
            break;
        case "A/G":
            document.getElementById("ansText").innerText = "Annuity(A)" + " = ";
            document.getElementById("num").placeholder = "Gradient" + " Value" + "(G)";
            show_hide_ginot(false);
            break;
        default:
            console.log("Improper Radio Factor Selected");
    }
};

// button toggles for Factor
document.getElementById('Factor_button').onclick = function(){
    if ( document.getElementById("TimeValueOfMoney").classList.contains('hide') ){
        document.getElementById("TimeValueOfMoney").classList.toggle('hide');
        document.getElementById("iEffective").classList.add('hide');
        document.getElementById("Depreciation").classList.add('hide');
    }

};
// button toggles for iEffective
document.getElementById('iEffective_button').onclick = function(){
    if ( document.getElementById("iEffective").classList.contains('hide') ) {
        document.getElementById("TimeValueOfMoney").classList.add('hide');
        document.getElementById("iEffective").classList.remove('hide');
        document.getElementById("Depreciation").classList.add('hide');
    }
};
// button toggles for Depreciation
document.getElementById('Depreciation_button').onclick = function(){
    if ( document.getElementById("Depreciation").classList.contains('hide') ){
        document.getElementById("TimeValueOfMoney").classList.add('hide');
        document.getElementById("iEffective").classList.add('hide');
        document.getElementById("Depreciation").classList.remove('hide');
    }
};
