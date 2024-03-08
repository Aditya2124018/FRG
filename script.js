let span_year = document.getElementById("span-year");
let name = document.getElementById("name");
let amount = document.getElementById("amount");
let submit = document.getElementById("sub-btn");
let add = document.getElementById("add");
let printbtn = document.getElementById("print-btn");
const date = new Date();
span_year.innerHTML = date.getFullYear();

 let table = document.getElementById("table");
table.style.display = "none";
add.addEventListener("click", addElement);
submit.addEventListener("click", getSum);
printbtn.addEventListener("click", printContent);
let row=1;
function addElement(){
  if(name.value && amount.value){
    table.style.display = "table";
    let newrow = table.insertRow(row);
    let cell1 = newrow.insertCell(0);
    let cell2 = newrow.insertCell(1);
    
    row++;

cell1.innerHTML = name.value;
cell2.innerHTML = amount.value;
form.reset();
event.preventDefault();
  }
  else{
    alert("Please enter fields");
}
event.preventDefault();

}

function getSum(){
    let userRes = prompt("Once you clicked on get total you can't add more investments.\n Do you want to GET TOTAL Write(Yes/No)Below" );
    if(userRes == "yes" || userRes == "Yes"){
        let sum=0;
    let newrow = table.insertRow(row);
    let cell1 = newrow.insertCell(0);
    let cell2 = newrow.insertCell(1);
    for(let i=1;i<row;i++){
        let cell = table.rows[i].cells[1].innerHTML;
        console.log(cell)
        sum=sum+parseInt(cell);
    }
    cell1.innerHTML = "Total";
    cell2.innerHTML = sum;
    add.removeEventListener("click", addElement);
    add.addEventListener("click",function(){
        alert("Now you can't add new investments")
        event.preventDefault();
    }
        );
    }
    else{
        
        event.preventDefault();
    }
    event.preventDefault();
}
  
function printContent(){
    let uname = prompt("Enter your name :");
    let PAN = prompt("Enter your PAN :");

    localStorage.setItem("uname", uname);
    localStorage.setItem("PAN", PAN);
    localStorage.setItem("table", table.outerHTML);
    window.location.href = "./printpage.html";

    // window.print();
    event.preventDefault();


}
