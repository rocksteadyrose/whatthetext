// $(document).ready(function() {

//     $(document).on("submit", ".signupform", newUserSubmit);

//     function newUserSubmit(event) {
//         event.preventDefault();
//         console.log('yes');
//         if (!($(".new-email").val()) || !($(".new-password").val())) {
//             return
//         }
//         newUser({
//             username: $(".new-email").val().trim(),
//             password: $(".new-password").val().trim()
//         })
//     };

//     function newUser(userData) {
//         $.post("/register", userData)
//         .then(console.log('this sucks'));
//     }
// });