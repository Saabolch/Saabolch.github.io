


let justifys = document.querySelectorAll("input[name='justify']");

justifys.forEach(function(item){
    
    item.addEventListener("change", function(){
        let checked = document.querySelector("input[name='justify']:checked").value;
        document.querySelector("#flexDiv").style.justifyContent = checked;
    });
});

let margin = document.querySelector("input[name='margin']");
margin.addEventListener("change", function(){

    document.querySelectorAll("#flexDiv > p").forEach(function(item){
        item.style.margin = this.value + "px";
    }, this);

});
