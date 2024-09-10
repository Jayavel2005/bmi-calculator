


const BMI = JSON.parse(localStorage.getItem("bmi")) || {bmi : 0, category : ""};

document.querySelector('#results').innerHTML = `Your BMI is: ${BMI.bmi} Category : ${BMI.category}`;

function check() {
    const height = parseFloat(document.querySelector("#height").value); 
    const weight = parseFloat(document.querySelector("#weight").value); 

    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid height and weight.") 
    } else {
        const result = weight / Math.pow((height / 100), 2); 
        BMI.bmi = result.toFixed(2); 
        if(result < 18.5){
           BMI.category = "Underweight";
        }
        else if(result >= 18.5 && result < 25){
            BMI.category = "Normal weight";
        }
        else if(result >= 25 && result < 30){
            BMI.category = "Overweight";
        }
        else{
            BMI.category = "Obese";
        }

        
        
    }
    localStorage.setItem("bmi", JSON.stringify(BMI));
    document.querySelector('#results').innerHTML =`Your BMI is: ${BMI.bmi} Category : ${BMI.category}`;
}
