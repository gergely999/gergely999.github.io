let users = [];

doFetch();

function doFetch() {
  
  let fetchInit = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default",
  };

  fetch("http://localhost:3000/users", fetchInit)
    .then(
      (data) => data.json(),
      (err) => console.err(err)
    )
    .then(
      data => createTable(data));
}

document.addEventListener('click',function(e){
  if(e.target.id == 'infoBtn'){

    let row = e.target.parentElement.parentElement.parentElement;
    let id = row.id;

    let actualRow = document.getElementById(id);

    actualRow.style.color = "blue";

    let firstName = row.querySelector("#firstName");
    let lastName = row.querySelector("#lastName");
    let age = row.querySelector("#eletkor");


    console.log(firstName.innerHTML, lastName.innerHTML, + age.innerHTML + " éves.");

    let oldValue = firstName.innerHTML;
    firstName.innerHTML = "";

    firstName.innerHTML = `<input type="text" id="mytext"></input>`;
    firstName.text = oldValue;



    console.log(actualRow);

    actualRow.querySelector('#firstName').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {

        firstName.innerHTML = document.getElementById("mytext").value;
        console.log(firstName);
      }
  });
  

  }

}); 




function createTable(json) {
  let tableBody = document.querySelector("#userTable tbody");

  let createTD = (html, parent, name) => {
    let td = document.createElement("td");
    td.className = "sor";
    td.innerHTML = html;
    td.id=name;
    td.type="text";
    parent.appendChild(td);

  };

  let createButtonGroup = (parent) => {
    let group = document.createElement("div");
    group.className = "btn-group";

    //btn szerkesztés
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';
    btnInfo.id = "infoBtn";


    //btn delete
    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';
    

    //hozzáadás a divhez
    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");

    //group hozzáadása a tdhez
    td.appendChild(group);

    //az egész hozzáadása a szülőhöz
    parent.appendChild(td);
  };

  for (let user of json) {
    let tr = document.createElement("tr");
    tr.id = parseInt(user.id);

    createTD(parseInt(user.id), tr, "id");
    createTD(user.firstName, tr, "firstName");
    createTD(user.lastName, tr, "lastName");
    createTD(user.eletkor, tr, "eletkor");

    createButtonGroup(tr);
    tableBody.appendChild(tr);
  }

}

