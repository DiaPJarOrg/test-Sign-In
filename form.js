
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


//printArray(data);

var myCookies={};
var user_name;

//getUserData();

function saveCookies(){
    
getUserData();
validateForm();
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
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var a= document.forms["myForm"]["name"].value;
    var b= document.forms["myForm"]["family"].value;
    var c= document.forms["myForm"]["email"].value;
    var d= document.forms["myForm"]["pass"].value;
    var e= document.forms["myForm"]["rpas"].value;
    //if field are empty
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "") ){
        document.getElementById('error').innerHTML="All fields must be filled in!";
        return false;
        //if name or lname are less then 3 symbols
    }else if ((a.length<3 || a.length>30) || (b.length<3|| b.length>30) ||(c.length<3|| c.length>30) || (d.length<3|| d.length>30) || (e.length<3|| e.length>30)) {
      document.getElementById('error').innerHTML="There is an invalid information in the fields!(less than 3 symbols)";
        return false; 
        
        // if pass is not same in both fields
    }else if (d != e){
        document.getElementById('error').innerHTML="Password in both fields is not same!";
        return false;
        //if email not consist @ or .
    }else if(!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
        /*c != /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})/){
        document.getElementById('error').innerHTML="Please enter a valid e-mail address!";
        return false; 
        */
    }else {
        document.getElementById('error').innerHTML="Welcome!!!";
        return true;
    }
    
        
        
}
