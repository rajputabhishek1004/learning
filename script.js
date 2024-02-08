function formjs() {
    const name =
        document.forms.ContactForm.Name.value;
    const email =
        document.forms.ContactForm.EMail.value;
    const Tel =
        document.forms.ContactForm.Telephone.value;
     
    console.log(name, email, Tel);
 
    if (name === ""
        || name.includes('0') || name.includes('1')
        || name.includes('2') || name.includes('3')
        || name.includes('4') || name.includes('5')
        || name.includes('6') || name.includes('7')
        || name.includes('8') || name.includes('9')) 
    {
        window.alert
        ("Please enter your name properly.");
        name.focus();
        return false;
    }
 
 
    if (email === "" || !email.includes('@')) {
        window.alert
        ("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (Tel === "" || Tel.length < 10 || Tel.length > 10) {
        window.alert
        ("Please enter a valid number.");
        Tel.focus();
        return false;
    }
 
    return alert("Thanks!! Your Form Is Submitted.");
}


