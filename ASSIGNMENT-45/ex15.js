//more guest
var guest = ["uncle", "aunt", "grand father", "grand mother"];
guest.forEach(function (Element) {
    console.log("i found a bigger  dinner table", Element);
});
guest.unshift("brother");
console.log(guest);
guest.splice(3, 0, "friend"); //inserting in middle
console.log(guest);
guest.push("sister"); //inserting at end
console.log(guest);
guest.forEach(function (Element) {
    console.log("you are invited for dinner", Element);
});
//shrinking guest list
console.log("i can invite only two people");
var remove = guest.pop();
console.log("sorry i cant invite you for dinner", remove);
var remove1 = guest.pop();
console.log("sorry i cant invite you for dinner", remove1);
var remove2 = guest.pop();
console.log("sorry i cant invite you for dinner", remove2);
var remove3 = guest.pop();
console.log("sorry i cant invite you for dinner", remove3);
var remove4 = guest.pop();
console.log("sorry i cant invite you for dinner", remove4);
console.log(guest);
guest.forEach(function (Element) {
    console.log("you are still invited", Element);
});
console.log(guest.slice(2));
