"use strict";
/*  
     CMPS2151 - Test#3
     JavaScript
      
     StudentID: 2022156707, 
     Student Name:	  
     Date:   

     Filename: test3.js
*/

/*-------------------------------------------------Section 1: Account Login Form-------------------------------*/

//Section 1: Question 2

let signupForm=document.getElementById('signup');
// signupForm.querySelector('div');
signupForm.addEventListener('submit', function(e){
   // ! why do we do fucntion 'e'
   e.preventDefault();
   //we add this to stop the form from being submitted and we 
   //continue running the loop

//question 3
   let pwd=document.getElementById('pwd').value;
   let feedback=document.getElementById('feedback');
//question 4
   let regex1= /[A-Z]/;
   let regex2= /[\d]/;
   let regex3= /[!, %, #, \& ]/;
//section 1 question 5

   if (pwd.length < 8){
      feedback.textContent='must be atleast 8 characters';
   }
   else if(!regex1.test(pwd)){
      feedback.textContent='must contain a capital letter';
   }
   else if(!regex2.test(pwd)){
      feedback.textContent='must contain a digit';
   }
   else if(!regex3.test(pwd)){
      feedback.textContent='must contain a special character';
   }   
   else{
      signupForm.submit('');
   }
});

/*-------------------------------------------------Section 2: Fees Wasted Form--------------------------------*/

//Section 2: Question 1
 
//to get all the elements from a class, we can do this 
//usign a query selector
//use wuery selector to devcalre a collection of html elements
let feeItem=document.querySelectorAll('.feeItem');
//Section 2: Question 1a
for(let i=0; i<feeItem.length; i++){
   // let i=counter;
   feeItem[i].addEventListener('click', function(){
      calcTotal();
   });
};


// //Section 2: Question 2 : Function to add values of selected check boxes and display total
function calcTotal() {
 
//Section 2: Question 2a
let feesTotal=0;
for(let i=0; i<feeItem.length; i++ ){
//Section 2: Question 2b

   if(feeItem[i].checked){
      feesTotal+=Number(feeItem[i].value);
   }
   console.log('Total Fees:', feesTotal); 
// }
}
//Section 2: Question 2c
document.getElementById('TotalFees').innerHTML=formatCurrency(feesTotal);
 
 
}
//end of calcTotal( ) function


 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
   return "$" + value.toFixed(2);
 }
 
 
/*-------------------------------------------------Section 3: Withdraw Reason-------------------------------*/


// Selection lists in the web form
let course = document.getElementById("course");
let section = document.getElementById("section");
let reason = document.getElementById("reason");

// Form button to generate the text of the selected course
let dropCourseBttn = document.getElementById("dropCourse");

// Paragraph containing the text of the selected course
let output = document.getElementById("output");



/* Event handler to modify the content of the section selection list
   when the course selection list changes*/
course.onchange = function() {
   let courseIndex = course.selectedIndex;
     
   let courseList = course.options[courseIndex].text; //store selection from course
   
   if (courseIndex === 0) {
      //Section 3: Question 5 - Call showAll function pass the section as parameter
      showAll(section);
   } else {
     //Section 3: Question 5 - Call filterSelect and pass section and courseList as the category
     filterSelect(section ,courseList);
   }  
}//end course onchange function



/* Event handler to modify the content of the reason selection list
   when the section selection list changes*/
section.onchange = function() {
   let sectionIndex = section.selectedIndex;

   let sectionList = section.options[sectionIndex].text;
   
   if (sectionIndex === 0) {
      //Section 3: Question 5 - Call showAll function pass reason as parameter
      showAll(reason);
   } else {
      //Section 3: Question 5 - Call filterSelect and pass section and sectionList as the category
      filterSelect(sectionList);
   }     
}//end section onchange function



/*Section 3: Question 3 **********************************************
Name: showAll( ) 
@param: selectList
*/
function showAll(selectList){
   // !elaborate
 let options=selectList.querySelectorAll('options');
 let optionLength=options.length;

 for(let i=0; i<optionLength; i++){
   const option=options[i];
   option.style.display="block";
}
}






//end showAll() function **********************************************



/*Section 3: Question 4 **********************************************
Name: filterSelect( ) 
@param: selectList, category
Description: Function filters the category selected to determine which 
options within that selection list will be displayed
*/
function filterSelect(selectList, category ){
   const options=selectList.querySelectorAll('options');
   const optionLength=options.length;

   for(let i=0; i<optionLength; i++){
      if (options.className===category){
         options[i].style.display="block";
      }
      else{
         options[i].style.display="none";
      }
   }
}

//end filterSelect( ) function **********************************************


//Section 3: Question 6****************************************************
const dropCourseEventhandler=document.getElementById('dropCourse');
dropCourseEventhandler.addEventListener('click', fucntions(){
textContent="Dropped"});




/*-------------------------------------------------Section 4: Bonus Alert-------------------------------*/
function showResult()
{


}//end showResult( ) function
