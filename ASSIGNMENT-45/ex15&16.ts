    //more guest
let guest=["uncle","aunt","grand father","grand mother"]
guest.forEach(Element =>
{
    console.log("i found a bigger  dinner table",Element);
    } )


guest.unshift("brother")
console.log(guest)


guest.splice(3,0,"friend")   //inserting in middle
console.log(guest)

guest.push("sister")  //inserting at end
console.log(guest)

guest.forEach(Element =>
{
    console.log("you are invited for dinner",Element);
    } )

    
    //shrinking guest list

    console.log("i can invite only two people")
    let remove= guest.pop();
    console.log("sorry i cant invite you for dinner",remove)
    let remove1= guest.pop();
    console.log("sorry i cant invite you for dinner",remove1)
    let remove2= guest.pop();
    console.log("sorry i cant invite you for dinner",remove2)
    let remove3= guest.pop();
    console.log("sorry i cant invite you for dinner",remove3)
    let remove4= guest.pop();
    console.log("sorry i cant invite you for dinner",remove4)
    console.log(guest)

    guest.forEach(Element =>
        {
            console.log("you are still invited",Element);//only two persons
            } )
        
    console.log(guest.slice(2))//empty array
   