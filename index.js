/*
 
write a function that takes a string of text and returns true if
the parentheses are balanced and false otherwise.
*
Example:
balancedParens('(');  // false
balancedParens('()'); // true
balancedParens(')(');  // false
balancedParens('(())');  // true
*
Step 2:
make your solution work for all types of brackets
*
Example:
balancedParens('[](){}'); // true
balancedParens('[({})]');   // true
balancedParens('[(]{)}'); // false
*
Step 3:
ignore non-bracket characters
balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
balancedParens(' var hubble = function() { telescopes.awesome();'); // false
*
"())"
*/

var ArrOFParenthesses=[];
function balancedParens(input) {
    //  TO DO
  return  ReadString(input)

    
  }

  var result=false;


function ReadString(input){
  // console.log("input" +input.length)
 //  console.log("input" +ArrOFParenthesses.length)
 ArrOFParenthesses=[];
 ArrOFParenthesses.length=0;
 result=false
 var breaked=false;
for(i=0;(i<input.length)&&(!breaked);i++){
 //   console.log(input[i])

var char=input[i];
    if((input[i]==='(')||(input[i]==='{')||(input[i]==='[')){

     //   console.log(input[i])
        ArrOFParenthesses.push(char);
       // console.log("ARRay length after pushing  is"+ArrOFParenthesses.length)

    }

   else if((input[i]===')')||(input[i]===']')||(input[i]==='}')){
    //    console.log(input[i])

     //   ArrOFParenthesses[i]=(input[i]);
     lastchar=ArrOFParenthesses.pop();
  //   console.log("ARRay length is"+ArrOFParenthesses.length)
 //console.log("last character is "+lastchar);
 // console.log(char)
  //   console.log(ArrOFParenthesses.length)

   if( (lastchar === '(' && char=== ')') ||(lastchar === '[' && char=== ']') ||(lastchar === '{' && char=== '}')){
    result=true;
  //  return result;
   }
   else 
   {
       result=false;
       breaked=true;
      // break;;;
//return result;
} 

    }


 

    
}
//console.log(ArrOFParenthesses.length)
 result =(ArrOFParenthesses.length==0);
if(breaked){
    result= false;
}
 if(ArrOFParenthesses.length>0) {
    // console.log("last"+ArrOFParenthesses[0])
 }
console.log(result)

return result;
}

balancedParens('(');  // false
balancedParens('()'); // true
balancedParens(')(');  // false
balancedParens('(())');  // true
balancedParens('[](){}');  
balancedParens('[({})]');   // true
balancedParens('[(]{)}'); // false
balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
balancedParens(' var hubble = function() { telescopes.awesome();'); // false