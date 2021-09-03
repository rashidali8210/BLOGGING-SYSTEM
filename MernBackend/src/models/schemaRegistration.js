const mongoose=require("mongoose");
const xSchema= new mongoose.Schema({
    name:{ 
        type:String,
        require:true},
        number:{
            type : String,
            require:true},
            password:{
                type : String,
                require:true}
});
const register=new mongoose.model("register", xSchema);
module.exports  = register;
