function tipcalculate() {
    var Billamount = document.getElementById("Billamount").value;
    var serviceRating = document.getElementById("serviceRating").value;
    var peopleamount = document.getElementById("peopleamount").value;
  

    if (Billamount === "" || serviceRating == 0) {
      alert("Please enter values");
      return;
    }

    if (peopleamount === "" || peopleamount <= 1) {
      peopleamount = 1;
      document.getElementById("each").style.display = "none";

    } else {
      document.getElementById("each").style.display = "block";
    }

    var total = (Billamount * serviceRating) / peopleamount;
  
  total = Math.round(total * 100) / 100;
  
  total = total.toFixed(2);
  
  document.getElementById("tiptotal").style.display = "block";
  document.getElementById("tip").innerHTML = total;

  }
  document.getElementById("tiptotal").style.display ="none";
  document.getElementById("each").style.display = "none";
  
  document.getElementById("calculate").onclick=function() {
    tipcalculate();
  }

  


