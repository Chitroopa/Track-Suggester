$(document).ready(function() {
 $("#welcome").click(function(event) {
   event.preventDefault();
   $("#welcome").hide();
   $(".notshow").show();
 });
 $("#questions").submit(function(event) {
    event.preventDefault();
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
        if (((learnInput === "learn3") || (learnInput === "learn2")) && (((interestInput === "interest1") && (workForInput === "workFor1") && (uiInput === "ui1")) ||
        ((interestInput === "interest1") && (workForInput === "workFor1") && (uiInput === "ui2")) ||
        ((interestInput === "interest1") && (workForInput === "workFor1") && (uiInput === "ui3")) ||
        ((interestInput === "interest1") && (workForInput === "workFor2") && (uiInput === "ui1")) ||
        ((interestInput === "interest1") && (workForInput === "workFor3") && (uiInput === "ui1")) ||
        ((interestInput === "interest3") && (workForInput === "workFor1") && (uiInput === "ui1")) ||
        ((interestInput === "interest3") && (workForInput === "workFor1") && (uiInput === "ui2")) ||
        ((interestInput === "interest3") && (workForInput === "workFor1") && (uiInput === "ui3")) ||
        ((interestInput === "interest4") && (workForInput === "workFor1") && (uiInput === "ui1")) ||
        ((interestInput === "interest4") && (workForInput === "workFor1") && (uiInput === "ui2")) ||
        ((interestInput === "interest4") && (workForInput === "workFor1") && (uiInput === "ui3")) ||
        ((interestInput === "interest4") && (workForInput === "workFor1") && (uiInput === "ui3"))))
        {
          alert ("ruby: easy to develop");
          $(".notshow, #welcome").hide();
          $(".rubytrack, .notshow-tryagain").show();
        }
        else {
          alert ("learn c#");
          $(".notshow, #welcome").hide();
          $(".csharptrack, .notshow-tryagain").show();
        }
      }
      if ((learnInput === "learn1") || (learnInput === "learn2") )
      {
        if (((interestInput === "interest2") && (workForInput === "workFor2") && (uiInput === "ui2")) ||
          ((interestInput === "interest3") && (workForInput === "workFor3") && (uiInput === "ui3")) ||
          ((interestInput === "interest2") && (workForInput === "workFor1") && (uiInput === "ui1")) ||
          ((interestInput === "interest2") && (workForInput === "workFor1") && (uiInput === "ui2")) ||
          ((interestInput === "interest2") && (workForInput === "workFor1") && (uiInput === "ui3")) ||
          ((interestInput === "interest2") && (workForInput === "workFor2") && (uiInput === "ui1")) ||
          ((interestInput === "interest2") && (workForInput === "workFor2") && (uiInput === "ui3")) ||
          ((interestInput === "interest3") && (workForInput === "workFor2") && (uiInput === "ui1")) ||
          ((interestInput === "interest3") && (workForInput === "workFor3") && (uiInput === "ui1")) ||
          ((interestInput === "interest4") && (workForInput === "workFor3") && (uiInput === "ui1")) ||
          ((interestInput === "interest4") && (workForInput === "workFor4") && (uiInput === "ui1")) ||
          ((interestInput === "interest4") && (workForInput === "workFor4") && (uiInput === "ui3")) ||
          ((interestInput === "interest4") && (workForInput === "workFor2") && (uiInput === "ui1")))
        {
          alert("C# high in demand")
        }


      }
        }
    else
    {
      alert("Please enter all the information");
    }
 });
});
