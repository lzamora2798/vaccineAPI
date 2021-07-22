const express = require('express');
const router = express.Router();
const Person = require('../models/Person')

router.get('/', async(req,res)=>{
    try{
        const persons = await Person.find();
        res.json(persons)
    }
    catch(err){
        res.json({message:err})
    }
})

// router.get('/2',(req,res)=>{
//     res.send('we are in index/get/2');
// })

router.post('/', async (req,res)=>{
    console.log(req.body);
    const post = new Person({
        nombre:req.body.name,
        cedula:req.body.cedula,
        edad:req.body.edad
    })

    try {
        const savedPerson = await post.save()
        res.json(savedPerson)
    }
    catch(err){
        res.json({message:err})
    }  
})

router.get('/:Id',async(req,res)=>{
    try{
        const person = await Person.findById(req.params.Id);
        res.json(person);
    }
    catch(err){
        res.json({message:err})
    } 
})


router.delete('/:Id',async (req,res)=>{
    try{
        const removeperson = await Person.remove({_id:req.params.Id})
        res.json(removeperson);
    }
    catch(err){
        res.json({message:err})
    } 
})

//update name
router.patch('/:Id',async (req,res)=>{
    try{
        const updateperson = await Person.updateOne(
            {_id:req.params.Id},
            {$set : {nombre: req.body.name}}
            )
        res.json(updateperson);
    }
    catch(err){
        res.json({message:err})
    } 
})





module.exports = router;