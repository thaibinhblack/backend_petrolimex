var express = require('express');
var Petrolimex = require('../Model/petrolimexModel')

var PetrolimexController = express.Router()


// Methods GET / POST petrolimex

PetrolimexController
    .route('/petrolimex')
    .get((request,response) => {
        console.log('GET/petrolimex')
        Petrolimex.find((error,petrolimex) => {
            if(error){
                response.status(500).send(error)
                return
            }

            console.log(petrolimex)
            response.json(petrolimex)
            return response.status(200)

        })
    })
    .post((request,response) => {
        console.log('POST/petrolimex')
        //GET DATA JSON FROM FORM REQUEST
        var PetrolimexItem = new Petrolimex(request.body);

        PetrolimexItem.save();

        response.status(201).send(PetrolimexItem);
    })

// Methods PUT, GET, DELETE one Petrolimex

PetrolimexController
    .route('/petrolimex/:uuid')
    .get((request,response) => {
        console.log('GET uuid / Petrolimex')
        //GET UUID from url
        PetrolimexUUID = request.params.uuid
        Petrolimex.findOne({ UUID: PetrolimexUUID}, (error,petrolimex) => {
            if(error){
                return response.status(500).send(error) 
            }
            console.log(petrolimex)
            response.json(petrolimex)
            return response.status(200)
        })
    })
    .put((request,response) => {
        console.log('PUT / petrolimex')
        PetrolimexUUID = request.params.uuid
        Petrolimex.findOne({ UUID: PetrolimexUUID }, (error,petrolimex) => {
            if(error){
                return response.status(500).send(error)
                
            }
            if(petrolimex)
            {
                for(var property in request.body)
                {
                    console.log(property)
                    console.log(request.body[property])
                    petrolimex[property] = request.body[property]
                    console.log(petrolimex.property)
                    
                }
                petrolimex.save()
                console.log(petrolimex)
                
                response.json(petrolimex)
                return response.status(200)
            }
            return response.status(404).send({message: 'NOT FOUND!'})
        })
    })

module.exports = PetrolimexController;
