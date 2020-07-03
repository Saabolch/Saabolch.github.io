function sendOrderData(){
    let price = 1200;

    let name = document.querySelector("#fullName").value.trim();
    let email = document.querySelector("#email").value.trim();
    let address = document.querySelector("#address").value.trim();
    let comment = document.querySelector("#comment").value.trim();

    let message = document.querySelector("#message");
   
    let topping = parseInt(document.querySelector("input[name='topping']:checked").value, 10);
    let sauce = parseInt(document.querySelector("#sauce").value, 10);

    let quantity = parseInt(document.querySelector("#quantity").value, 10);

    if(!name){
        alert("Név megadása kötelező!");
    }
    else if(!email || email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("E-mail cím nem megfelelő!");
    }
    else if(address.length < 10){
        alert("Cím megadása kötelező!");
    }
    //ez a verzió megengedi, hogy az első karakter < legyen, és utána legyen egy > is: else if(comment.indexOf("<") > 0 && comment.indexOf(">") > 0){
    else if(comment.indexOf("<") != -1 && comment.indexOf(">") != -1){
        alert("A megjegyzésben HTML nem megengedett!");
    }   
    else if(isNaN(quantity) || quantity < 1){
        alert("Legalább 1 hamburgert rendelni kell!");
    }
    else if(quantity > 10){
        alert("Legfeljebb 10 hamburger rendelhető egyszerre!");
    }
    else{
        let amount = quantity * (price + topping + sauce);
        message.innerHTML = amount + " Ft";

    }

    
}
