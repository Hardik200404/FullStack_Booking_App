const express = require('express')
const router = express.Router();

const admin_controller = require('../controllers/appointment')

router.get('/',admin_controller.getAllAppointments)
router.post('/',admin_controller.postAppointment)
router.delete('/:id',admin_controller.deleteAppointment)

module.exports = router;