const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];
//characters.length == 91

function generatePassword() {
    let passwordLength = document.getElementById("psw-length-input").value
    if(passwordLength < 15) {
        passwordLength = 15
    }
    if(passwordLength > 35) {
        passwordLength = 35
    }
    let password1 = ""
    let password2 = ""
    for(let i = 0; i < passwordLength*2; i++) {
        let newCharacter = Math.floor(Math.random() * characters.length)
        if(i%2 == 0){
            password1 += characters[newCharacter]
        } else {
            password2 += characters[newCharacter]
        }
    }
    document.getElementById("box1").textContent = password1
    document.getElementById("box2").textContent = password2
}