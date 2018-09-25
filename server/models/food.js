const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    food: [
        {
            foodname: String,
            foodweight: Number,
            calories: Number,
            protein: Number,
            carbs: Number,
            fats: Number,
            vitaminE: {type: Number, default: 0}, 
            vitaminD: {type: Number, default: 0}, 
            zinc: Number,
            copper: Number,
            calcium: Number, 
        }
    ],
    recipetotalweight: Number,
    recipetotalcalories: Number,
}, {timestamps: true});

const DogSchema = mongoose.Schema({
    name: {type: String, required: [true, "Please enter the name of this recipe"], minlength: [3, "Name must be at least 3 characters long"]},
    petname: {type: String, required: [true, "Please enter the your dog's name"], minlength: [2, "Name must be at least 2 characters long"]},
    creator: {type: String, required: [true, "Please enter your name"], minlength: [3, "Name must be at least 3 characters long"]},
    weight: {type: Number, required: [true, "Please enter your dog's weight"], min: [0.5, "Weight must be more than 0"]},
    targetweight: {type: Number, required: [true, "Please enter your dog's target weight"]},
    activity: {type: String, required: [true, "Please enter your dog's activity level"], minlength: [3, "Activity must be at least 3 characters"]},
    breed: {type: String, required: [true, "Please enter your dog's breed"]},
    foodintake: Number,
    calorieintake: Number,
    diet: [RecipeSchema]
}, {timestamps: true});

mongoose.model('Dog', DogSchema),
mongoose.model('Recipe', RecipeSchema)
