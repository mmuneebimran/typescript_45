let list = [
    {
      mountain: "everest",
    },
    {
      river: "amazon",
    },
    {
      country: "japan",
    }
  ];
  
  // Trying to access an index that is out of bounds (e.g., index 3)
  console.log(list[2]);  // This will produce an index error when we put 3 instead of 2
  
  // To correct the error, ensure that you are accessing a valid index
  console.log(list[0]);  // Accessing the first element
  
  // Alternatively, you can check the length of the array before accessing an index
  if (list.length > 1) {
    console.log(list[1]);  // Accessing the second element
  } else {
    console.log("Array is empty");
  }
  