var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb+srv://test:test@naam-nyqyh.azure.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true},(err,db)=>{
   if(err){
       return console.log("error present")
   }else{
       console.log("Mongo db connected");
   }
  
});
db.on('error', console.error.bind(console,' connection error;'));

// Schema
var mySchema = mongoose.Schema({
  item:String,
})
// schema model

var NAAMmodel = mongoose.model('NAAMmodel', mySchema,'naam');


var mydata =[];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

    //load page start
    app.get('/naam',function(req,res){

            db.once('open', function(){
            });

            NAAMmodel.find({},function(err,data){
              if(err) throw err
                mydata=data;
              console.log(data)
              res.render('naam',{namen:data});
            })


    });

    app.post('/naam',urlencodedParser,function(req,res){
      console.log("someone came in here");
        console.log(req.body.item);

      var insertarray =[
           {item:req.body.item}
      ];


       NAAMmodel.collection.insertMany(insertarray,function(err,docs){

          if(err){
            return console.error(err)
          }else{
            console.log("Documents Inserted in the collection")
          }
       });

        if (!req.body){
          return res.sendStatus(400)
        }

          res.send(insertarray); // return to ajax request
    });

    app.delete('/naam/:item',function(req,res){

      NAAMmodel.deleteMany({ item: req.params.item.split('-').join(' ')}, function(err,docs) {
        if(err){
          return console.error(err)
        }else{
          console.log("Documents Deleted in the collection")
        }
      });
        res.send('done '); // return to ajax request
    });
};

//database using mlab