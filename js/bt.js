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

function createTable(json) {
  let tableBody = document.querySelector("#userTable tbody");

  let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
  };

  let createButtonGroup = (parent) => {
    let group = document.createElement("div");
    group.className = "btn-group";

    //btn szerkesztés
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

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

    createTD(parseInt(user.id), tr);
    createTD(user.firstName, tr);
    createTD(user.lastName, tr);
    createTD(user.eletkor, tr);

    createButtonGroup(tr);
    tableBody.appendChild(tr);
  }
}

