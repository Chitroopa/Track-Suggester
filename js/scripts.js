$(document).ready(function() {
 $("#questions").submit(function(event) {
    event.preventDefault();
    alert("hi");
    var nameInput = $("#name").val();
    var interestInput = $("#interest").val();
    var workForInput = $("#workFor").val();
    var uiInput = $("#ui").val();
    var learnInput = $("#learn").val();
    var techInput = $("input:radio[name=tech]:checked").val();
    var emailInput = $("#email").val();
    alert(techInput);
    if ((interestInput != "interest0") && (workForInput != "workFor0") && (uiInput != "ui0") && (learnInput != "learn0") && nameInput && interestInput && workForInput && uiInput && learnInput && techInput && emailInput)
    {
      if (techInput === "front")
      {
        alert("ruby or c#");
      }
      else
      {
        alert("java php");
      }
    }
    else
    {
      alert("Please enter all the information");
    }
 });
});
