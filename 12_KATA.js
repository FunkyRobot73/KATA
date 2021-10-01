const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    // Code here!
    let sharedIngredients1 = [];
    let sharedIngredients2 = [];
    for(x = 0; x < 3; x++) {
    // 
    for(i = 0; i < bakeryA.length; i++) {
      if((recipes[x].ingredients).includes(bakeryA[i])) 
        sharedIngredients1.push(bakeryA[i]) 
       }
    }
    //  *****  That created an Array that holds Ingredients bakerA has that can be used.
  
    for( j = 0; j < 3; j++) {
      for(k = 0; k < bakeryB.length; k++) {
        if((recipes[j].ingredients).includes(bakeryB[k])) 
         sharedIngredients2.push(bakeryB[k]) 
        }
      };
      //  *****  That added ingredients to Array that BakeryB has as well.
  
  let cake;
    for(q = 0; q < recipes.length; q++) {
      for(w = 0; w < sharedIngredients1.length ;w++) 
        for(e = 0; e < sharedIngredients2.length ;e++)
          if((recipes[q].ingredients).includes(sharedIngredients2[e])) 
        cake = (recipes[q]);  
  }
  return cake.name
  // create empty "variable/object" & store cake
  };
  
  let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  let bakeryB = ['milk', 'butter', 'cream cheese'];
  let recipes = [
      {
          name: 'Coconut Sponge Cake',
          ingredients: ['coconut', 'cake base']
      },
      {
          name: 'Persian Cheesecake',
          ingredients: ['saffron', 'cream cheese']
      },
      {
          name: 'Custard Surprise',
          ingredients: ['custard', 'ground beef']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));
  
  bakeryA = ['potatoes', 'bay leaf', 'raisins'];
  bakeryB = ['red bean', 'dijon mustard', 'apples'];
  recipes = [
      {
          name: 'Potato Ganache',
          ingredients: ['potatoes', 'chocolate']
      },
      {
          name: 'Sweet Fish',
          ingredients: ['anchovies', 'honey']
      },
      {
          name: "Nima's Famous Dijon Raisins",
          ingredients: ['dijon mustard', 'raisins']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));
  