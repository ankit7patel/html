let storedata = []; // array


function reg(){
    let nam = document.getElementsByName('nam').value;
    let uname = document.getElementsByName('uname').value;
    let mob = document.getElementsByName('mob').value;
    let pass= document.getElementsByName('pass').value;
    let cpass = document.getElementsByName('cpass').value;

    let data = {
        name:nam,
        username:uname,
        mobile:mob,
        password:pass,
        confirm_password:cpass,
    }

    fetch('http://localhost:3000')
    storedata.push(data);

    console.log(data);
    console.log(storedata);

    return false;
}
