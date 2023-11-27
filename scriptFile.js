const doneButton = document.querySelector("#submit");
        let randomValue = Math.trunc(Math.random()*11);
        function validateState(event){
            // event.preventDefault()
            const inputFeild = document.querySelector(".inputFeild");
            let inputValue = inputFeild.value;
            // console.log(inputValue)
            if(inputValue === randomValue){
                alert("Congratulation's ! You Won. 🎉 ")
            }else if(inputValue === ""){
                alert("Enter a Valid Input !")
            }
            else{
                alert("OOPS..! You Loose. Please Try Again 🤪 ")
            }
        }

        doneButton.addEventListener("click",validateState);