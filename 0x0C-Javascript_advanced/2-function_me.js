function welcomeMessage(firstName) {
    return _ => alert(`welcome ${firstName}`) 
}

let guillaume = welcomeMessage("Guillaume")
let alex = welcomeMessage("Alex")
let fred = welcomeMessage("Fred")

guillaume();
alex();
fred();