const express=require('express')
const app=express()
const parkings=require('./parkings.json')
const port=3000;
app.use(express.json())
app.get('/parkings/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const parking=parkings.find((parking)=>parking.id ==id)
    res.status(200).json(parking)
})
app.put('/parkings/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const parking=parkings.find((parking)=>parking.id ==id)
    parking.name=req.body.name
    parking.city=req.body.city
    parking.type=req.body.type
    res.status(200).json(parking)
})
app.delete('/parkings/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const parking=parkings.find((parking)=>parking.id ==id)
    parkings.splice(parkings.indexOf(parking),1)
    
    res.status(200).json(parking)
})
app.post("/parkings",(req,res)=>{
    parkings.push(req.body)
    res.status(200).json(parkings)
})
app.get('/',(req,res)=>{
    res.send('parkings listen ')
})

app.listen(port,()=>{
    console.log('App listenin on port '+port)
})