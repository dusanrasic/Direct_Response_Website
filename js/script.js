$(document).ready(function(){
  //function validate(){
  $(document).on("click","#btnSubmit",function(e){
    e.preventDefault();
    var subject = $('#tbSubject').val();
    var email = $('#tbEmail').val();
    var message = $('#taContent').val();
    var errors = [];

    var check_subject = /^[A-Za-z0-9 ]{3,20}$/ ;
    var check_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i ;

    if(!check_subject.test(subject)){
      errors[errors.length] = "You valid Subject (3-20).";
    }
    if (!check_email.test(email)) {
      errors[errors.length] = "You must enter a valid email address.";
    }
    if (message == "") {
      errors[errors.length] = "You must enter a valid Message (cannot be empty).";
    }
    if (errors.length > 0) {
      reportErrors(errors);
      return false;
    }
      console.log(subject);
    $.ajax({
      type: "POST",
      url: "contact.php/send_email",
      data:  {
        Subject: subject,
        Mail: email,
        Message: message
      },
      dataType: "text",
      success: function(res){
        $('#tbSubject').val("");
        $('#tbEmail').val("");
        $('#taContent').val("");
        alert(res);
      }
    });
    return true;
  });

function reportErrors(errors){
   var msg = "Please Enter Valide Data...\n";
   for (var i = 0; i<errors.length; i++) {
     var numError = i + 1;
     msg += "\n" + numError + ". " + errors[i];
  }
   alert(msg);
  }
/* smooth scrolling */
	$('.navigation li').click(function(){
		var target = $(this).data("link");
		$('html,body').animate({
        scrollTop: $(target).offset().top
		},1000);
	});
});
