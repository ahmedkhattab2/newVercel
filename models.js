const mongoose =require('mongoose');
const schema=mongoose.Schema({
    title:String,
    colors :String,
     
    name: String,
    age: String,
    adresse:String ,
    image:String 
     
});
module.exports=mongoose.model('person',schema);