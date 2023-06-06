var budg;
function budgeter(){
    budg = document.getElementById("budget").value;
    console.log(budg);
}

var exp;

function expenser(){    
    exp = document.getElementById("expenses").value;
    var means = document.getElementById("descrip").value;
    var duedate = document.getElementById("duedate").value;
    var havet = document.getElementById("payment").value;


    var mean = document.createElement("span")
    mean.innerHTML = means + " ";
    document.body.appendChild(mean);

    var due = document.createElement("span");
    due.innerHTML = duedate + " ";
    document.body.appendChild(due);

    var deduc = document.createElement("span");
    deduc.innerHTML = exp + " ";
    document.body.appendChild(deduc);

    var payment = document.createElement("span");
    payment.innerHTML = havet + "<br>";
    document.body.appendChild(payment);

    budg = budg - exp;
    document.getElementById("rem").innerHTML = budg;
}