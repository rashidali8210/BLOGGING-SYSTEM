const mongoose = require('mongoose');
const DB=process.env.DATABASE
mongoose.connect("DB" ,{
    useNewUrlParser:true , useUnifiedTopology: true , useCreateIndex:true})
.then(() => {
    console.log('connection succ');

}).catch((e) => {
    console.log('no connectio ');
})
