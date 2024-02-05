   //initial list
let guest=["uncle","aunt","grand father","grand mother"]
guest.forEach(Element =>
{
    console.log("you are invited for dinner dear",Element);
    } )  // to print message with each element in a separate line

    //printing person who could not attend by initializing a variable
let not_attend=guest.slice(1,2)
console.log(not_attend,"will not attend dinner")  

   //printing person who could not attend directly
   console.log(guest.slice(1,2),"will not attend dinner") 

   //modifying initial list
   guest.splice(1,1,"sister")
   console.log(guest)

   //again invitation
   guest.forEach(Element =>
    {
        console.log("you are invited for dinner dear",Element);
        } )