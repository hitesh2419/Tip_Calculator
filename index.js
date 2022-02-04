function calculateTip() {
    var amount = document.getElementById("amount").value;
    var service = document.getElementById("service").value;
    var person = document.getElementById("person").value;
    if (amount == "" || service == 0) {
      alert("Please enter values");
      return;
    }
    if (person == 1 || person<=1) {
        person=1;
      document.getElementById("each").style.display = "none";
    } 
    else {
      document.getElementById("each").style.display = "block";
    }
    var total = (amount * service) / person;
    total = total.toFixed(2);
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("total").innerHTML = total;
  }

  document.getElementById("totaltip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  document.getElementById("calculate").onclick = function() {
      calculateTip();
  };
