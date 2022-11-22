function empty(value){
    if(value.length > 0 ){
        return false ;
    }
    return true;
}
function checkradio( array , blvariable){
    array.forEach((ele) => {
        if(ele.checked === true){
            blvariable[0] = true;
            // console.log(blvariable);
            // console.log("troo");
            // return blvariable;
        }
    });
}
document.getElementsByName('firstname')[0].oninput = function(){
    let firstname = document.getElementsByName('firstname')[0];
    let myRegex = /^[a-zA-Z-\s]+$/;
if (firstname.value.length === 0) {
    usernameeror.innerHTML = "the firstname is required , can't be empty " ;
     firstname.classList.add("is-invalid");
    firstname.classList.remove("is-valid")
} else if( firstname.value.length > 15 ){
    usernameeror.innerHTML = "the max length for the firstname is 15 ";
    firstname.classList.add("is-invalid");
    firstname.classList.remove("is-valid")
}  else if(  myRegex.test(firstname.value) === false ){
    usernameeror.innerHTML = " the first name can't contain numbers" ;
    firstname.classList.add("is-invalid");
    firstname.classList.remove("is-valid")
} else {
    usernameeror.innerHTML = ""
    firstname.classList.add("is-valid");
    firstname.classList.remove("is-invalid")
}
}
document.getElementsByName('lastname')[0].oninput = function(){
    let lastname = document.getElementsByName('lastname')[0];
    let myRegex = /^[a-zA-Z-\s]+$/;
if (lastname.value.length === 0) {
    lastnameerror.innerHTML =  "the lastname is required , can't be empty ";
    lastname.classList.add("is-invalid");
    lastname.classList.remove("is-valid")
} else if( lastname.value.length > 15 ){
    lastnameerror.innerHTML =  "the max length for the lastname is 15 ";
    lastname.classList.add("is-invalid");
    lastname.classList.remove("is-valid")
}  else if(  myRegex.test(lastname.value) === false ){
    lastnameerror.innerHTML  = "the lastname can't contain numbers";
    lastname.classList.add("is-invalid");
    lastname.classList.remove("is-valid")
} else {
    lastnameerror.innerHTML = "";
    lastname.classList.add("is-valid");
    lastname.classList.remove("is-invalid")
}
}
document.getElementsByName('theemail')[0].oninput = function(){
    let theemail = document.getElementsByName('theemail')[0];
    let emailtest = /(\w{1,})[.](\w{1,})[@](\w{1,})[.](\w{1,})/ ;
if( theemail.value.length === 0 ){
    emailerror.innerHTML = "the email is required , can't be empty";
    theemail.classList.add("is-invalid");
    theemail.classList.remove("is-valid");
} else if( emailtest.test(theemail.value) === false  ){
    emailerror.innerHTML = "please enter a valid email ";
    theemail.classList.add("is-invalid");
    theemail.classList.remove("is-valid");
} else {
    emailerror.innerHTML = "";
    theemail.classList.add("is-valid");
    theemail.classList.remove("is-invalid");
}
}
document.getElementsByName('phone')[0].oninput = function(){
    let phone = document.getElementsByName('phone')[0];
let numtest = /(06|05|07)\d{8}$/;
if( phone.value.length === 0 ){
    phoneerror.innerHTML = "the phone number is required , can't be empty";
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
} else if(  numtest.test(phone.value) === false  ) {
    phoneerror.innerHTML =  "please enter a valid phone number";
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
} else {
    phoneerror.innerHTML =  "";
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
}
}
const errorCollection = [];
submittheform.onclick = function(e){
    errorCollection.length = 0;
    alertbox.style.display = "none";
    alertbox.innerHTML = "" ;
    let firstname = document.getElementsByName('firstname')[0].value;
let lastname = document.getElementsByName('lastname')[0].value;
let theemail = document.getElementsByName('theemail')[0].value;
let phone = document.getElementsByName('phone')[0].value;
let gender = document.getElementsByName('gender');
let groupe = document.getElementsByName('groupe');
let clubs = document.getElementsByName("clubs")[0].selectedOptions;
// let clubs = document.getElementsByName("clubs")[0].selectedOptions.length;
let myRegex = /^[a-zA-Z-\s]+$/;
let emailtest = /(\w{1,})[.](\w{1,})[@](\w{1,})[.](\w{1,})/ ;
let numtest = /(06|05|07)\d{8}$/;
e.preventDefault();
console.log('clicked');
if (firstname.length === 0) {
    errorCollection.push("the firstname is required , can't be empty ");
} else if( firstname.length > 15 ){
    errorCollection.push("the max length for the firstname is 15 ");
}  else if(  myRegex.test(firstname) === false ){
    errorCollection.push("the first name can't contain numbers");
}
if (lastname.length === 0) {
    errorCollection.push("the lastname is required , can't be empty ");
} else if( lastname.length > 15 ){
    errorCollection.push("the max length for the lastname is 15 ");
}  else if(  myRegex.test(lastname) === false ){
    errorCollection.push("the lastname can't contain numbers");
}
if( theemail.length === 0 ){
    errorCollection.push("the email is required , can't be empty");
} else if( emailtest.test( theemail ) === false  ){
    errorCollection.push("please enter a valid email ");
}
if( phone.length === 0 ){
    errorCollection.push("the phone number is required , can't be empty");
} else if(  numtest.test( phone ) === false  ) {
    errorCollection.push("please enter a valid phone number");
}
const gendercase = [false];
checkradio(gender , gendercase )
if(gendercase[0] === false ){
    errorCollection.push("Please you have to choose your gender");
}
const groupecase = [false];
checkradio(groupe , groupecase );
if(groupecase[0] === false){
    errorCollection.push("Please you have to choose your groupe");
}
if( clubs.length === 0 ){
    errorCollection.push("you have to select at least one item in clubs , can't be empty ");
} else if( clubs.length > 3 ) {
    errorCollection.push("you have selected too many choices max is 3 ");
}
if( errorCollection.length > 0 ) {
    for (let i = 0; i < errorCollection.length ; i++) {
        alertbox.style.display = "block";
        alertbox.innerHTML += "<strong> error ! </strong>" + errorCollection[i] + "<br>" ;
    }
} else {
    forma.submit();
}
}
