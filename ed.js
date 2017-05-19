
(function() {
    'use strict';

    function initTemplate(templateSelector) {
        var templateText = document.querySelector(templateSelector).innerHTML;
        return Handlebars.compile(templateText);
    }

    var addRecipeTemplate = initTemplate('.AddRecipeTemplate');
    var recipesElement = document.querySelector('.recipesList');

    var viewAddDivButton = document.querySelector('.viewAdd');
    var viewRecipesButton = document.querySelector('.viewView');

    var addButton = document.querySelector('.FinalAdd');

    var recipeTitle = document.querySelector('.recipeTitle');
    var recipeIngredients = document.querySelector('.recipeIngredients');
    var recipeServe = document.querySelector('.recipeServe');
    var recipeInstructions = document.querySelector('.recipeInstructions');


    var recipes = [{
    recipeTitle : 'Curry Pasta Salad',
    recipeIngredients : '500 g pasta screws' +
'65 ml (¼ C) sunflower oil' +
'1 green pepper, seeds removed, chopped' +
'1 red onion, chopped'+
'1 x 240 g Rhodes Tomato Puree Cup' +
'125 ml (½ C) vinegar' +
'15 – 30 ml (1 – 2 T) curry powder' +
'5 ml (1 t) ground turmeric' +
'125 ml (½ C) Rhodes Apricot Jam Superfine' +
'salt and freshly ground black pepper'+
'65 ml (¼ C) chopped parsley',
    recipeServe : 6,
    recipeInstructions : 'Cook the pasta screws as per the packet instructions and set aside to cool'
+ 'Heat the half of the oil in a medium saucepan.'
+ 'Add the green pepper and the onion and fry until softened but not browned.'
+ 'Lower the heat and add the Rhodes Tomato Puree Cup, remaining oil and vinegar.'
+ 'Bring to the boil.'
+ 'Add the curry powder, tumeric and the Rhodes Apricot Jam Superfine.'
+ 'Whisk well to mix and continue to cook over a low heat for 5 minutes.'
+ 'Season to taste with the salt and freshly ground black pepper.'
+ 'Pour the curry sauce over the noodles and toss to mix.'
+'Add the parsley.'
+'Chill until serving.'
    }];

    function display(data) {

        var recipeTitle = [];
        var recipeIngredients = [];
        var recipeServe = [];
        var recipeInstructions = [];

        for (var i = 0; i < data.length; i++) {
            var recipesData = data[i];

        }


        recipesElement.innerHTML = addRecipeTemplate({
            recipes: recipesData
        });
}
viewAddDivButton.addEventListener('click', function() {
      var getDiv = document.querySelector('.addRecipeDiv');

       if (getDiv.style.display === 'none')
       {
       getDiv.style.display = 'block';
       }
       else {
       getDiv.style.display = 'none';
       }
  });

  viewRecipesButton.addEventListener('click', function() {
        var getDiv = document.querySelector('.display');

         if (getDiv.style.display === 'none')
         {
         getDiv.style.display = 'block';
         }
         else {
         getDiv.style.display = 'none';
         }
    });

    addButton.addEventListener('click', function() {
        var recipeTitleValue = recipeTitle.value;
        var recipeIngredientsValue = recipeIngredients.value;
        var recipeServeValue = recipeServe.value;
        var recipeInstructionsValue = recipeInstructions.value;


        if (recipeTitleValue !== ''
            && recipeIngredientsValue !== ''
            && recipeServeValue !== ''
            && recipeInstructionsValue !== '') {
            boots.push({
              recipeTitle : recipeTitleValue,
              recipeIngredients :recipeIngredientsValue,
              recipeServe : recipeServeValue,
              recipeInstructions : recipeInstructionsValue,
            });

        }

        display(recipes);

        recipeTitle.value = "";
        recipeIngredients.value = "";
        recipeServe.value = "";
        recipeInstructions.value = "";

    });

    display(recipes);

})();
