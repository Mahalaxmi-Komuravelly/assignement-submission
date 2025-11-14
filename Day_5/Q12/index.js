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