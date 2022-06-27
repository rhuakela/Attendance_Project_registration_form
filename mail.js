const firebaseConfig = {
    apiKey: "********************************",
    authDomain: "********************************************",
    databaseURL: "*******************************************",
    projectId: "facerecognitionproject-264cc",
    storageBucket: "facerecognitionproject-264cc.appspot.com",
    messagingSenderId: "******************",
    appId: "1:****************:web:ae6ab7d2***********74af1",
    measurementId: "**************"
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
