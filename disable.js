function activeCancel(){
    let inputs = document.querySelectorAll('#test input[type="text"]')
    for (let i = 0; i<inputs.length; i++){
        inputs[i].disabled = !inputs[i].disabled
    }
}