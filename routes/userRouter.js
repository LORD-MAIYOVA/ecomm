const router = require('express').Router();
const userController = require('../controller/userController');
const auth = require('../middlewares/auth');


router.post('/register',userController.register)
router.get('/refreshtoken',userController.refreshToken)
router.post('/login',userController.login)
router.get('/logout',userController.logout)
router.get('/info',auth,userController.getUser)
router.patch('/addcart',auth,userController.addCart)
router.patch('/addcart',auth,userController.addCart)
router.get('/history',auth,userController.history)

module.exports = router;