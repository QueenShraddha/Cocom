const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});




// function readform(){
//     namev= document.getElementById("name").value;
//     emailv= document.getElementById("email").value;
//     passwordv= document.getElementById("password").value;
//     mobilev=document.getElementById("mobile").value;
//     cityv=document.getElementById("city").value;
//    console.log(namev, emailv, passwordv,mobilev,cityv);
// }

// document.getElementById("signup").onclick = function () {
//     readform();
  
//     firebase
//       .database()
//       .ref("name/" + namev)
//       .set({
//         Name: namev,
//         Email: emailv,
//         Password: passwordv,
//         City: cityv,
//         Mobile: mobilev,
//       });
//     alert("singed up");
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("password").value = "";
//     document.getElementById("city").value = "";
//     document.getElementById("moblie").value = "";
//   };
  
  // document.getElementById("login").onclick = function () {
  //   readform();
  
  //   firebase
  //     .database()
  //     .ref("name/" + namev)
  //     .on("value", function (snap) {
  //       document.getElementById("name").value = snap.val().name;
  //       document.getElementById("email").value = snap.val().email;
  //       document.getElementById("password").value = snap.val().password;
  //     });
  // };
  
var namev,emailv,passwordv,mobilev,cityv;
  function readFom(){
   
   
    namev= document.getElementById("name").value;
    emailv= document.getElementById("email").value;
    passwordv= document.getElementById("password").value;
    mobilev=document.getElementById("mobile").value;
    cityv=document.getElementById("city").value;
    

  }
  document.getElementById("insert").onclick = function () {
    readFom();
    firebase 
      .database()
      .ref("customer " +Cname)
      .set({
          Name:namev,
          Email:emailv,
          Password:passwordv,
          Mobile:mobilev,
          City:cityv,
          
      });
      
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("password").value="";
      document.getElementById("mobile").value="";
      document.getElementById("city").value="";
    };