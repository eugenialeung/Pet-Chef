const mongoose = require('mongoose');
const Dog = mongoose.model('Dog');
const Recipe = mongoose.model('Recipe');

const session = require('express-session');

module.exports = {
    allRecipe: (req, res) => {
        Dog.find({ $where: "this.diet.length > 0"} , (err, dogs) => {
            console.log(dogs);
            if(err){
                res.json(err);
            }
            else{
                res.json(dogs);
            }
        }).sort({createdAt: -1})
    },

    // searchRecipes: (req, res) => {
    //     Dog.find({ "$or": [
    //         { "petname": { "$contains": req.body.searchbar} }, 
    //         { "creator": { "$contains": req.body.searchbar }},
    //         { "breed": { "$contains": req.body.searchbar }},
    //     ]}, (err, dog) => {
    //         if(err){
    //             console.log(err);
    //             res.json(err);
    //         }
    //         else{
    //             console.log(dog)
    //             res.json(dog);
    //         }
    //     })
    // },
    searchRecipes: (req, res) => {
        console.log(req.body);
        Dog.find({$where: "this.diet.length > 0",
         "$or": [
            { "petname": req.body.searchbar} , 
            { "creator": req.body.searchbar },
            { "breed": req.body.searchbar },
        ]}, (err, dog) => {
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log(dog)
                res.json(dog);
            }
        }).sort({createdAt: -1})
    },
    
    addDog: (req, res) => {
        Dog.create(req.body, (err, dog) => {
            if(err){
                res.json(err);
            }
            else{
                console.log(dog._id);
                req.session.did = dog._id;
                console.log(req.session.did);
                res.json(dog);
            }
        })
    },
    updateDog: (req, res) => {
        console.log(req.body);
        Dog.findOneAndUpdate({_id: req.params.id}, req.body, (err, data) => {
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },

    makeFood: (req, res) => {
        var thisfood = new Recipe({food: {foodname: req.body.foodname, foodweight: req.body.foodweight, calories: req.body.calories, protein: req.body.protein, carbs: req.body.carbs, fats: req.body.fats, calcium: req.body.calcium, vitaminE: req.body.vitaminE, vitaminD: req.body.vitaminD, zinc: req.body.zinc, copper: req.body.copper}});
        thisfood.save(function(err){
            if(err){
                res.json(err);
            }
            else{
                req.session.rid = thisfood._id;
                res.json(thisfood);
            }
        })
    },

    updateFood: (req, res) => {
        var kk = Recipe.findOne({_id:req.params.rid})
        console.log(kk,'WHYYYYYYYYY')
        Recipe.findOne({_id: req.params.rid}, (err, recipe) => {
            if(err){
                res.json(err);
            }
            else{
                Recipe.update(recipe, {$push: {food: {foodname: req.body.foodname, foodweight: req.body.foodweight, calories: req.body.calories, protein: req.body.protein, carbs: req.body.carbs, fats: req.body.fats, calcium: req.body.calcium, vitaminE: req.body.vitaminE, vitaminD: req.body.vitaminD, zinc: req.body.zinc, copper: req.body.copper}}}, (err, food) => {
                    if(err){
                        res.json(err);
                    }
                    else{
                        console.log("Updated this shiz")
                        res.json(food);
                    }
                })
            }
        })
    },
    getSelectedFoods: (req, res) => {
        console.log(req.session.did, req.session.rid);
        Recipe.findOne({_id: req.params.id}, (err, food) => {
            if(err){
                res.json(err);
            }
            else{
                res.json(food);
            }
        })
    },
    removeFood: (req, res) => {
        console.log("removing a food from this recipe id", req.session.rid);
        Recipe.update({_id: req.session.rid}, {$pull: {food: {_id: req.params.fid}}}, (err, data) => {
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
    // addFoodToDog: (req, res) => {
        
    //     Recipe.update({_id: req.body.recipe}, {$set: {recipetotalweight: req.params.ounces,recipetotalcalories:req.params.calories}},(error,test)=>{
    //         if(error){
    //             res.json(error)
    //         }
    //         else{
    //             res.json(test)
    //         }
            // if(error){
            //     res.json(error)
            // }
            // Dog.findOne({_id: req.session.did}, (err, dog) => {
            //     if(err){
            //         res.json(err);
            //     }
            //     else{
            //         Dog.update(dog, {$push: {diet: test}})
            //     }
            // })
            // else{
            //     Dog.findOneAndUpdate({_id:req.session.did},{$push:{diet:test}},(err,data)=>{
            //         if(err){
            //             res.json(err)
            //         }
            //         else{
            //         console.log('success')
            //             res.json(data)
            //         }
            //     })
            // }
    //     })
    // },
    addRecipeToDog:(req,res) =>{
        console.log(req.body.recipe)
        Dog.findOne({_id:req.session.did},(err,dog)=>{
            if(err){
                res.json(err)
            }
            else{
                Dog.update(dog,{$push:{diet:req.body.recipe}},(err,data)=>{
                    if(err){
                        res.json(err)
                    }
                    else{
                        res.json(data)
                    }
                })
            }
        })
    },







    singleDog: (req, res) => {
        Dog.findOne({_id: req.params.id}, (err, dog) => {
            if(err){
                res.json(err);
            }
            else{
                res.json(dog);
            }
        })
    },
    removeDog: (req, res) => {
        Dog.remove({_id: req.params.id}, (err, data) => {
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    }
}
