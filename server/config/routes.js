const foodController = require('./../controllers/foods');
const path = require('path');

module.exports = (app) => {
    app.get('/api/recipe/show', foodController.allRecipe);
    app.post('/api/recipe/search', foodController.searchRecipes);
    app.post('/api/dog', foodController.addDog);
    app.post('/api/recipe', foodController.makeFood);
    app.post('/api/recipe/:rid', foodController.updateFood);
    app.get('/api/recipe/:id', foodController.getSelectedFoods);
    app.put('/api/recipe/:fid', foodController.removeFood);
    // app.post('/api/dog/addRecipe/:ounces/:calories', foodController.addFoodToDog)
    // app.post('/api/dog/:id/recipe', foodController.addFood);
    // app.put('/api/recipe/:id', foodController.editRecipe);
    app.get('/api/dog/:id', foodController.singleDog);
    // app.delete('/api/dog/:id', foodController.removeDog);
    app.put('/api/dog/:id', foodController.updateDog);
    app.post('/api/dog/addRecipeToDog/',foodController.addRecipeToDog);
    app.all('*', (req, res) => res.sendFile(path.resolve('./public/dist/public/index.html')));

    
}