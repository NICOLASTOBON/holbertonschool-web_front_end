function welcomeMessage(fullName) {
    return _ => alert(`welcome ${fullName}`) 
}

let guillaume = welcomeMessage("Guillaume")
let alex = welcomeMessage("Alex")
let fred = welcomeMessage("Fred")

guillaume();
alex();
fred();