function Click(take){

document.getElementById("Screen").value+=take;

}

function Clear(){

document.getElementById("Screen").value=''

}
function equalClick(){

    var text=document.getElementById("Screen").value
    var result=eval(text)
    document.getElementById("Screen").value=result
}