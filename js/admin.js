
let users = [
    {id: "1", name:"Clint Eastwood", email:"clint@eastwood.com", address:"1112 Putrifalva, Marhapássztor dűlő 12.", tel: "+36 70/678-5467"},
    {id: "2", name:"Vladimir Putin", email:"putin@kreml.ru", address:"5555 Москва, Красная площадь 1", tel: "+7 1"},
    {id: "3", name:"Don Quixote de la Mancha", email:"caballero@loco.es", address:"123 La Mancha, Malom köz 9.", tel: "+ 34/342-2211"}
];


window.onload = function(){

    function createCell(html, parent){
        let td = document.createElement("td");
        if(typeof html == "string"){
            td.innerHTML = html;
        }
        else{
            td.appendChild(html);
        }
        parent.appendChild(td);
    }
    function createTableHeader(html, parent){
        let th = document.createElement("th");
        th.innerHTML = html;
        th.setAttribute("scope", "col");
        parent.appendChild(th);
    }
    function createButtons(){
        let group = document.createElement("div");
        group.classList.add("btn-group");
        let modify = document.createElement("button");
        modify.setAttribute("class", "btn btn-info");
        modify.innerHTML = "Módosítás";
        let del = document.createElement("button");
        del.setAttribute("class", "btn btn-danger");
        del.innerHTML = "Törlés";
        group.appendChild(modify);
        group.appendChild(del);  
        return group;
    }


    let table = document.querySelector("#users");
    let caption = document.createElement("caption");
    caption.innerHTML = "Vásárlók";
    table.appendChild(caption);

    let thead = document.createElement("thead");
    thead.classList.add("thead-dark");
    let row = document.createElement("tr");
    createTableHeader("Azonosító", row);
    createTableHeader("Név", row);
    createTableHeader("E-mail", row);
    createTableHeader("Cím", row);
    createTableHeader("Telefonszám", row);
    createTableHeader("Kezelés", row);
    thead.appendChild(row);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");

    for(let user of users){
        let row = document.createElement("tr");
        createCell(user.id, row);
        createCell(user.name, row);
        createCell(user.email, row);
        createCell(user.address, row);
        createCell(user.tel, row);
        createCell(createButtons(), row);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);


};