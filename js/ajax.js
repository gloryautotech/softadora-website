// // please add jquery first
// $(document).ready(function() {

//     //contact us ajax
//     $('.contact-us-button').on('click', function() {
        
//         if ($('#captcha').length != 0) {
//             var v = grecaptcha.getResponse();
//             if (v.length == 0) {
//                 document.getElementById('captcha').innerHTML = "You can't leave Captcha Code empty";
//                 return false;
//             } else {
//                 document.getElementById('captcha').innerHTML = "Captcha completed";
//             }
//         }
//         var contact_form = {
//             first_name: $('.contact-first-name').val(),
//            /* last_name: $('.contact-last-name').val(),*/
//             email: $('.contact-email').val(),
//              phone: $('.contact-phone').val(),
//              subject: $('.contact-subject').val(),
//              type: $('.contact-type').val(),
//             message: $('.contact-message').val()

//         }
//         $.ajax({
//             type: "POST",
//             url: window.location.origin + '/php/contact-form.php',
//             data: contact_form,
//             dataType: 'json',
//             success: function(data) {
//             	console.log(data.status);
//                 if (data.status == "success") {

//                     alert("Thank you for your enquiry. We will connect with you within 1 business day");
//                     $('#contact')[0].reset();
//                     return true;
//                 }
//             },
//             error: function(data) {
//                 console.log("fail ajax");
//             }
//         });
         
//     });

//     //subscription ajax
//     $('.subscription-button').on('click', function() {
//         var subscription_form = {
//             email: $('.subscription-email').val()
//         }
//         $.ajax({
//             type: "POST",
//             url: '../php/subscription.php',
//             data: subscription_form,
//             dataType: 'json',
//             success: function(data) {
//                 if (data.status == "success") {
//                     return true;
//                 }
//             },
//             error: function(data) {
//                 alert("fail ajax");
//             }
//         });
//     });

// });
