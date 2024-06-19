const appointment_model = require('../models/appointment')

exports.getAllAppointments =  (req, res) => {
    appointment_model.findAll()
    .then(appointments => {
        res.status(200).json(appointments)
    }).catch(error => {
        res.status(500).json({ error:error.message })
    })
}

exports.postAppointment =(req,res,next) => {
    let username = req.body.username
    let email = req.body.email
    let phone = req.body.phone

    appointment_model.create({
        username:username,
        email:email,
        phone:phone
    }).then(appointment => {
        console.log('appointment created')
        res.status(201).json(appointment)
    }).catch(err => res.status(500).json({ error:error.message }))
    
}

exports.deleteAppointment = (req,res,next) => {
    const appoint_id = req.params.id
    appointment_model.findByPk(appoint_id)
    .then(appointment => {
        if(appointment){
            appointment.destroy()
            res.status(204).json()
        }
    }).catch(error => {
        res.status(500).json({ error: error.message })
    })
}