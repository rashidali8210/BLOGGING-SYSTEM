const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://rashid:GWMwUJFCRwtbdznF@cluster0.wpm18.mongodb.net/Get-Registration-Data" ,{
    useNewUrlParser:true , useUnifiedTopology: true , useCreateIndex:true})
.then(() => {
    console.log('connection succ');

}).catch((e) => {
    console.log('no connectio ');
})
