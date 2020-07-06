
let users = [
    { id: "1", name: "Clint Eastwood", email: "clint@eastwood.com", address: "1112 Putrifalva, Marhapássztor dűlő 12.", tel: "+36 70/678-5467" },
    { id: "2", name: "Vladimir Putin", email: "putin@kreml.ru", address: "5555 Москва, Красная площадь 1", tel: "+7 1" },
    { id: "3", name: "Don Quixote de la Mancha", email: "caballero@loco.es", address: "123 La Mancha, Malom köz 9.", tel: "+ 34/342-2211" }
];


window.onload = function () {

    function createCell(html, parent) {
        let td = document.createElement("td");
        if (typeof html == "string") {
            td.innerHTML = html;
        }
        else {
            td.appendChild(html);
        }
        parent.appendChild(td);
    }
    function createTableHeader(html, parent) {
        let th = document.createElement("th");
        th.innerHTML = html;
        th.setAttribute("scope", "col");
        parent.appendChild(th);
    }

    function createButtons() {
        let group = document.createElement("div");
        group.classList.add("btn-group");
        let modify = document.createElement("button");
        modify.setAttribute("class", "btn btn-info");
        modify.innerHTML = "Módosítás";
        modify.onclick = modifyUser;
        let del = document.createElement("button");
        del.setAttribute("class", "btn btn-danger");
        del.innerHTML = "Törlés";
        del.onclick = deleteUser;
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

    for (let user of users) {
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

    function modifyUser() {

        let row = this.parentNode.parentNode.parentNode;

        for (let i = 1; i < row.children.length - 1; i++) {

            let cell = row.children[i];

            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("size", "18");
            input.value = cell.innerHTML;
            cell.innerHTML = "";
            cell.appendChild(input);
        }
        let buttonCell = row.children[5];
        buttonCell.innerHTML = "";
        buttonCell.appendChild(createSaveButton());
    }

    function saveUser() {

        let row = this.parentNode.parentNode.parentNode;

        let idCell = row.children[0];
        let id = idCell.innerHTML;

        let nameInput = row.children[1].children[0];
        let emailInput = row.children[2].children[0];
        let addressInput = row.children[3].children[0];
        let telInput = row.children[4].children[0];

        for (let user of users) {
            if (user.id == id) {
                user.name = nameInput.value.trim();
                user.email = emailInput.value.trim();
                user.address = addressInput.value.trim();
                user.tel = telInput.value.trim();
                //alert(user.name + " " + user.email + " " + user.address + " " + user.tel);
            }
        }

        for (let i = 1; i < row.children.length - 1; i++) {

            let cell = row.children[i];
            let input = cell.children[0];
            cell.innerHTML = input.value;

        }
        let buttonCell = row.children[5];
        buttonCell.innerHTML = "";
        buttonCell.appendChild(createButtons());
    }

    function createSaveButton() {
        let group = document.createElement("div");
        group.classList.add("btn-group");
        let save = document.createElement("button");
        save.setAttribute("class", "btn btn-success");
        save.innerHTML = "Mentés";
        save.onclick = saveUser;
        let del = document.createElement("button");
        del.setAttribute("class", "btn btn-danger");
        del.innerHTML = "Törlés";
        del.onclick = deleteUser;
        group.appendChild(save);
        group.appendChild(del);
        return group;
    }

    function deleteUser() {

        var erase = confirm("Biztos, hogy törölni akarja a felhasználót?");
        if(!erase){
            return;
        }

        let row = this.parentNode.parentNode.parentNode;
        let table = row.parentNode;
        let idCell = row.children[0];
        let id = idCell.innerHTML;

        for(var i = 0; i < users.length; i++){ // la az i-t let használatával definiáltam volna, akkor a cikus után már nem létezne (csak a ciklus blokkjában élne)
            if(users[i].id == id){
                break;
            }
        }

        users.splice(i, 1);
        table.removeChild(row);

        //alert(users.length);
        for(let i = 0; i < users.length; i++){

            //alert(users[i].name);
        }


    }



};