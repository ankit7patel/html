function reg(){
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let mobile = document.getElementById('mobile').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;

    if( name === ""){
        alert("plzz enter your name");
        return false;
    }
    else if( username === ""){
        alert("plzz enter your usrename");
        return false;
    }
    else if(mobile === ""){
        alert("plzz enter your mobile");
        return false;
    }
    else if( pass === ""){
        alert("plzz enter your pass");
        return false;
    }
    else if( cpass === ""){
        alert("plzz enter your cpass");
        return false;
    }
    else("Registration")
}
// console.log( name, username, mobile, pass ,cpass);