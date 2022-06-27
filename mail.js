const firebaseConfig = {
    apiKey: "AIzaSyDwsMe2DAn14vr9d9ELX0ArUZBi73nCEio",
    authDomain: "facerecognitionproject-264cc.firebaseapp.com",
    databaseURL: "https://facerecognitionproject-264cc-default-rtdb.firebaseio.com",
    projectId: "facerecognitionproject-264cc",
    storageBucket: "facerecognitionproject-264cc.appspot.com",
    messagingSenderId: "549937822436",
    appId: "1:549937822436:web:ae6ab7d2f0e501bd674af1",
    measurementId: "G-SCJ3HM2JCG"
    };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("Registration_form");
  
  document.getElementById("Registration_form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var Student_ID = getElementVal("Student_ID");
    var Contact_number = getElementVal("Contact_number");
    var Address = getElementVal("Address");
  
    saveMessages(name, emailid, Student_ID, Contact_number, Address);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("Registration_form").reset();
  }
  
  const saveMessages = (name, emailid, Student_ID, Contact_number, Address) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      Student_ID: Student_ID,
      Contact_number: Contact_number,
      Address: Address,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };