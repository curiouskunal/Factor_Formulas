/**
 * Created by Kunal on 2017-10-10.
 */


document.getElementById('SelectFactor').onchange = function(){
    if(document.getElementById('SelectFactor').value == "Option 5"){
        document.getElementById('FormulaInput').style.display = "block";
    }
    else{
        document.getElementById('FormulaInput').style.display = "none";
    }


}