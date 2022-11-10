const express=require('express');
 const router= express.Router();
const schema=require('./models');


router.get('/all',async(req,res)=>{
  const model1=  await schema.find()
     res.json(model1)
})

//  router.get('/:id',(req,res)=>{
//     schema.findById(req.params.id).then((data)=>{
//         res.json(data)
//     })
//  })
router.get('/:id',async(req,res)=>{
    const product=await schema.findById(req.params.id)
    res.json(product);
})
 
 
 router.get('/',(req,res)=>
 res.status(200).json({'name':'eman',
 'title':'khattab'

}));
// router.delete('/:id',(req,res)=>{
//   schema.deleteOne({"_id":req.params.id}).then((data)=>{
//     res.json(data)
//   })
// })
 
router.delete('/:id',async (req,res)=>{
  try{
    const model = await schema.deleteOne({"_id":req.params.id})
res.json(model);
  }
  catch(err){
    console.log(err)
  }
})

// router.patch('/:id',(req,res)=>{
//     schema.updateOne({"id":req.params.id},{'name':req.body.name}).then((data)=>{
//         res.json(data)
//     })
// })

router.patch('/:id',async(req,res)=>{
 try{
    const model = await schema.updateOne({"_id":req.params.id},{"title":req.body.title,'name':req.body.name,'age':req.body.age,"adresse":req.body.adresse,"image":req.body.image}) 
 res.json(model);


  }
 catch(err){
    console.log(err);
 }
 
})

router.post('/',(req,res)=>{

    const model1=new schema({
        title:req.body.title,
        name:req.body.name,
        age:req.body.age,
        adresse:req.body.adresse,
        image:req.body.image
    });
model1.save().then((data)=>res.json({
    "message":"created successfully",
    "data":data

}) )
});

  

 module.exports=router;
