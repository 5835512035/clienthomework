const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express();

app.listen(9000);
app.use(cors()); //จะเรียกใช้ผ่านโดเมนอื่นได้
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var curriculums = [],
Id = 1 ;

app.get('/api/curriculums' , (req,res) => {
res.send(curriculums);
console.log('Get curriculums');
});

app.post('/api/curriculums', (req,res) =>{

  var name = req.body.name;
  curriculums.push({
    id:Id++,
    name: name
  });
  res.send(curriculums);
  console.log('New curriculums',name);
});



app.delete('/api/curriculums/:curriculum_id' , (req,res) => {
var id = req.params.curriculum_id,
old = [];

curriculums.map(curriculum =>{
if (curriculum.id != id){
old.push(curriculum);
}
} );
curriculums = old;
res.send(curriculums);
console.log('Delete curriculums' ,id );
});