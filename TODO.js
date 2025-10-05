let local = localStorage.getItem("TODOLIST");
let now =JSON.parse(local);
let TODOarray = now || [];
show();
function addtodo() {
  let neww = document.querySelector("#input").value;
  let newwdate = document.querySelector("#dateinput").value;
  if (neww == "" && newwdate == "") {
    return;
  } else if (newwdate == "" || neww == "") {
    return;
  }
  let newobj = {
    TODO: neww,
    DATE: newwdate,
  };
  TODOarray.push(newobj);
  document.querySelector("#input").value = "";
  document.querySelector("#dateinput").value = "";
  show();
  // console.log(TODOarray);
}
function show() {
  let newhtml = ``;
  for (let i = 0; i < TODOarray.length; i++) {
    newhtml += `
    <span class="outputjs">${TODOarray[i].TODO}</span>
    <span class="outputjs">${TODOarray[i].DATE}</span>
    <button class="delete" onclick="TODOarray.splice(${i},1); show();">DELETE</button>
    `;
  }
  localStorage.setItem("TODOLIST", JSON.stringify(TODOarray));
  document.querySelector("#show-output").innerHTML = newhtml;
}
