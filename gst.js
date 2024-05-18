function d(){
    let price = parseInt(document.getElementById('price').value);
    let quantity =parseInt(document.getElementById('quantity').value);
    let tprice = price*quantity;
    let csgt = tprice*9/100;
    let sgst =  tprice*9/100;
    let tgst = csgt + sgst;
    let alltotal = tgst + tprice;
    // console.log(alltotal);
    document.getElementById('cgst').innerHTML = cgst;
    document.getElementById('sgst').innerHTML = sgst;
    document.getElementById('totalprice').innerHTML = totalprice;
    document.getElementById('totalamount').innerHTML = totalamount;

    return false;

}