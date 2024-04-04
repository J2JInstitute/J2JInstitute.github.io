const input=document.getElementById("input");
const toCelsius=document.getElementById("toCelsius");
const toFharenheit=document.getElementById("toFharenheit");
const result=document.getElementById("result");
let temp;

function convert(){
    if(toCelsius.checked){
        temp=Number(input.value);
        let ans=(temp-32)*(5/9);
        ans=ans.toFixed(2);
        result.textContent=temp+" ℉ = "+ans+" ℃";

    }
    else if(toFharenheit.checked){
        temp=Number(input.value);
        let ans=(temp*(9/5))+32;
        ans=ans.toFixed(2);
        result.textContent=temp+" ℃ = "+ans+" ℉";
    }
    else{
        result.textContent="Please select any one of the above options"
    }
}