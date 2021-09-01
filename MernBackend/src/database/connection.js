const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/rashidm" ,{
    useNewUrlParser:true , useUnifiedTopology: true , useCreateIndex:true})
.then(() => {
    console.log('connection succ');

}).catch((e) => {
    console.log('no connectio ');
})
