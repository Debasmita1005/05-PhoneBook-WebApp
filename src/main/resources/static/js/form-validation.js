$(function() {
  $("form[name='registration']").validate({
    rules: {
    	contactName: "required",
    	contactEmail: {
        required: true,
        email: true
      },
      contactNumber: {
        required: true,
        minlength: 10
      }
    },
    messages: {
    	contactName: "Please enter your name",
    	contactNumber: {
        required: "Please provide a valid phone number",
        minlength: "Your phone number must be at least 10 digits long"
      },
      contactEmail: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});