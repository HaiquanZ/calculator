const result = document.getElementById("result");
var expression = '';
var checkEqual = 0;
function press(num){
    if (((num=='+')||(num=='-')||(num=='*')||(num=='/'))&&checkEqual){
        expression = result.value + num;
    }else{
        expression += num;
    }
    result.value = expression;
    checkEqual = 0;
}
function clear_num(){
    expression = '';
    result.value = expression;
    checkEqual = 0;
}
function equal(){
    if(result.value){
        result.value = eval(expression);
        expression = '';
        checkEqual = 1;
    }else{
        result.value = "Please press number"
    }
}