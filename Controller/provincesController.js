var express = require('express');
var ProvincesModel = require('../Model/provincesModel')

var ProvincesController = express.Router()



//Methods GET / POST

ProvincesController.route('/provinces')
    .get((request,response) => {
        console.log('GET / Provinces')
        ProvincesModel.find({},(error,provinces) => {
            if(error)
            {
                return response.status(500).send(error)
            }
            if(provinces)
            {
                return response.status(200).send(provinces)
            }
            return response.status(400).send({message: 'NOT FOUND'})
        })
       
    })
    .post((request,response) => {
        const provinces = new ProvincesModel(request.body)
        provinces.save()
        return response.status(200)

    })

// Methods GET, PUT , DELETE id


ProvincesController.route('/provinces/:uuid')
    .get((request,response) => {
        console.log('GET UUID / PROVINCES')
        ProvincesModel.findOne({UUID: request.params.uuid}, (error,provinces) => {
            if(error)
            {
                return response.status(500).send(error)
            }
            if(provinces)
            {
                return response.status(200).send(provinces)
            }
            return response.status(400).send({message: 'NOT FOUND'})
        })
    })
    .put((request,response) => {
        console.log('PUT UUID / PROVINCES')
        ProvincesModel.findOne({UUID: request.params.uuid}, (error,provinces) => {
            if(error)
            {
                return response.status(500).send(error)
            }
            if(provinces)
            {
                for(const property in request.body)
                {
                    provinces[property] = request.body[property]
                }
                provinces.save()
                return response.status(200).send(provinces)
            }
            return response.status(404).send({message: 'NOT FOUND'})
        })
    })

    module.exports = ProvincesController;
