function signup(userName){
    let usernames=["mahi","hari","suma","sharath"]
    let n=usernames.length
    for(let i=0;i<n;i++){
        if(usernames[i] === userName){
            return "User Already Regsistered, Please Login"
        }
        else{
            usernames.push(userName)
            return "Signup Sucessfull, Please Login"
        }
    }
}
console.log(signup("sadhana"))

function login(userName,password){
    let usernames=["ravi","rani","dileep","harsha"]
    let n=usernames.length
    for(let i=0;i<n;i++){
        if(usernames[i] === userName){
            if(password === "Emp@123"){
                return "Login Sucessfull..."
            }
            else{
                return "Wrong Password...."
            }
        }
    }
    return "User Not Found, Please Signup"
}
console.log(login("ravi","Emp@123"))
console.log(login("mahi","Emp@123"))
console.log(login("ravi","Emp@12345"))