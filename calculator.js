function CalculateBMI()
{
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;
    var result=weight/Math.pow(height,2);

    document.getElementById("result").innerHTML=result.toFixed(2);

    if(result<18.5)
    document.getElementById("result-status").innerHTML="Under weight"
    else if(result>18.5 & result<25)
    document.getElementById("result-status").innerHTML="Normal"
    else if(result>25 & result<30)
    {
        document.getElementById("result-status").innerHTML="Over weight"
        document.getElementById("result-status").style.color="#c62828";
    }
    else 
    {
    document.getElementById("result-status").innerHTML="Obese"
    document.getElementById("result-status").style.color="#c62828";
    }
}
function Reset()
{
    document.getElementById("result").innerHTML=" ";
    document.getElementById("result-status").innerHTML=" ";

    document.getElementById("weight").value=" ";
    document.getElementById("height").value=" ";
    
}