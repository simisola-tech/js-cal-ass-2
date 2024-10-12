function calculator(){

    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    let operator= document.getElementById("operator").value

    let result;

    switch(operator){
        case "add":
                result = Number(input1) + Number(input2);
            break;
        case "subtract":
            result = Number(input1) - Number(input2);
            break;
        case "multiplication":
            result =Number(input1) * Number(input2);
            break;
        case "division":
            result = Number(input1) / Number(input2);
            break;


    }


    let resultTag = document.getElementById("result");

    resultTag.innerHTML = `Result: ${result}`

    // alert("Result": + result)
}