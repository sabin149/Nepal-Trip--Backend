const router = require('express').Router()
const auth = require("../middleware/auth")
const authAdmin = require("../middleware/auth-admin")
const userCtrl = require("../controllers/userCtrl")

router.get('/user', auth, userCtrl.getUsers)
router.get('/user/:id', auth, userCtrl.getUser)
router.delete('/user/:id', auth, userCtrl.deleteUser)
router.patch('/user', auth, userCtrl.updateUser)
router.patch('/updateuser/:id', auth, userCtrl.adminUpdateUser)
router.patch("/user/:id", auth, authAdmin, userCtrl.changeUserRole);

module.exports = router