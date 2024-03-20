const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,"Article title should be atleast 5 characters long"],
        maxlength:[50,"Article title should be less than 50 characters"]
    },
    body:{
        type:String,
        required:true,
        minlength:[5,"Article title should be atleast 5 characters long"],
        maxlength:[1000,"Article title should be less than 50 characters"]
    }
},{
    timestamps:true
})

const Article = mongoose.model("Article",articleSchema);

module.exports = Article;