function getnumber(num)
{
    var result = document.getElementById("inscr");
    result.value+=num;
}

function equalto()
{
    var result = document.getElementById("inscr");
    result.value=eval(result.value);
}

function scrclear()
{
    var result = document.getElementById("inscr");
    result.value="";
}