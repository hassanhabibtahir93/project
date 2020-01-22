const mongoose = require('mongoose');
const  url =' mongodb://127.0.0.1:27017/GarmentsProduct'
mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log('Mongoodb Connected')
}).catch((err)=>{
console.log(err)
})