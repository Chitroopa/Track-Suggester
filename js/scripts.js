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
    $(".username").text(nameInput);
    $(".useremail").text(emailInput);


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
        $(".notshow, #welcome").hide();
        $(".rubytrack, .notshow-tryagain").show();
      }

      else
      {
        {
          $(".notshow, #welcome").hide();
          $(".csharptrack, .notshow-tryagain").show();
        }
      }
      }
      else if (techInput === "back")
        {
        if ((learnInput === "learn1") && ((interestInput != "interest1") || (interestInput != "interest2") && ((workFor != "workFor1") || (workFor != "workFor2")) && (uiInput != "ui1")))
        {
          $(".notshow, #welcome").hide();
          $(".javatrack, .notshow-tryagain").show();
        }
        else
        {
          $(".notshow, #welcome").hide();
          $(".phptrack, .notshow-tryagain").show();
        }
      }
    else
    {
      $(".notshow, #welcome").hide();
      $(".csstrack, .notshow-tryagain").show();
    }
  }
    else
    {
      alert("Please enter all the information");
    }
 });
});
