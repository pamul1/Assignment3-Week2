function formValidation(){

    event.preventDefault()

    let StudentName = inputStudentName.value
    let StudentNameValidation=true

    if (StudentName.length >= 3){
        StudentNameValidation = true
        errorStudentName.innerHTML = ""
    }else {
        StudentNameValidation = false
        errorStudentName.innerHTML = "The name of student must be at least 3 characters"
    }

    let email = inputEmail.value
    let emailValidation = true

    if (email.length === 0 ){
        emailValidation = false
        mail.innerHTML = "Enter email"
    } else {
        emailValidation = false
        
    }

    let age = inputAge.value
    let ageValidation = true

    if ( age >= 16 && age <= 60 ) {
        ageValidation= true
        errorAge.innerHTML =""
    }else{
        ageValidation= false
        errorAge.innerHTML = "age must be between 16 and 60"
    }

    let courseselection = course.value

    

    formOutPut.innerHTML = ` The student name is ${StudentName}, email ${email}, age ${age}, course ${courseselection}`
    
   

}