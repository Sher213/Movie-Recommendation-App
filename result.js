//references
let btn = document.getElementById("enter");
let input = document.getElementById("input");

//listen for button press
btn.addEventListener("click", (e) =>  {
    //get text from input, only execute if value
    let prompt = input.value;
    if (prompt != "") {
        //TEST!!!!!!!
        let main = document.getElementById("main");
        main.innerText = prompt;
        //!!!!!!!!!!!
        
    }
});