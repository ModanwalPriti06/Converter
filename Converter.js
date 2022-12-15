const from=document.getElementById('from');
const to=document.getElementById('to');
const inputNum=document.getElementById('input-number');
let display=document.getElementById('result-box');
document.getElementById("convert").addEventListener('click',()=>{
let fromValue=from.value;
let toValue=to.value;
let inputValue=inputNum.value;
let res=convertBAse(fromValue,toValue,inputValue);
display.innerText=res;
})

function convertBAse(fromBase,toBase,num){
    let d=parseInt(num,fromBase);
    let res=d.toString(toBase);
    return res;
}
document.getElementById("swap").addEventListener('click',()=>{
    let temp=from.value;
    from.value=to.value;
    to.value=temp;

})