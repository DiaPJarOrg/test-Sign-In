
//what to happen after the enter or Sign up button is pressed 

   document.querySelector('.newSignUp').addEventListener('click', saveCookies);
    document.addEventListener('keypress', function (event) {
       
        if (event.keyCode === 13 || event.which === 13) {
            saveCookies();
        };
    });



console.log("The program is working!");

function printArray(array) {
    for (var index = 0; index < array.length; index++) {
        // var element = array[index];
        console.log(array[index]);
    }

}
// var data =[{name:1,lname:2,email:3,pwd:4,reppwd:5},{name:6,lname:7,email:8,pwd:9,reppwd:10}];

// var newUser = new CreateUser(fname,lname,email,passw,rpass);
// var newUser1 = new CreateUser("Sara", "Stancheva", "sasa@abv.bg", "pass2", "pass1");

var data = [];
var newUser;
var x;

function getUserData() {
   
    var incomes;
    incomes= {
        fname: document.querySelector('.fname').value,
        lname: document.querySelector('.lname').value,
        email:document.querySelector('.email').value,
		passw : document.querySelector('.password').value,
		rpass : document.querySelector('.reppass').value
    }
    //console.log("bbbbb");
     newUser = new CreateUser(incomes.fname,incomes.lname,incomes.email,incomes.passw,incomes.rpass);
     return pushToArray();

}

function CreateUser(name, lname, email, pwd, reppwd) {

    this.name = name;
    this.lname = lname;
    this.email = email;
    this.pwd = pwd;
    this.reppwd = reppwd;
};

function pushToArray() {
    data.push(newUser);
}


printArray(data);

    // console.log(Object.values(data));
    // console.log(newUser2);
 
var myCookies={};
var user_name;

function saveCookies(){
    
getUserData();
        //myArrayOfUsers= 
   var userData = data;
    
   // user_name= document.querySelector('.fname').value;
    var expiresAttrib = new Date(Date.now()+60*1000).toString();
    
    //document.cookie = escape("name")+"="+ escape(user_name)+"; expires="+expiresAttrib;
   //alert(document.cookie);  
     /*    
    //start reusable code
        document.cookie="";
        var expiresAttrib = new Date(Date.now()+60*1000).toString();
        var cookieString = "";
        for (var key in myCookies) {
          cookieString = key +"="+ myCookies[key]+ ';'+expiresAttrib+';';
          document.cookie= cookieString;  
        }
    */
    document.cookie = escape("name")+"="+ escape(userData[userData.length-1].name)+"; expires="+expiresAttrib;
}
      /*  
        //End reusable code
       /* document.getElementById('out').innerHTML=document.cookie;
       
    }
    */
function validateForm(){
    var uName= document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    
}
