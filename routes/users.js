var express = require('express');
const { getlogout } = require('../controllers/adminContollers');
const { getLogin, getLoginRegister, postSignup, postLogin, getproductsDetails, homepage, nodata, getcart, getcheckout, getOtp, confirmOtp, postOtp, getSignUp, postconfirmOtp, addtocart, logout, getProfile, changeproductquantity, vegetables, postcheckout, deleteCart, orderplaced, verifyPayment, orderProducts, addressPage, postAddressAdd, getEditAddress, postEditAddress, addressdelete, PostCheckoutAddress, getCheckoutAddress, orderCancel } = require('../controllers/userContollers');
const { addAddress } = require('../helpers/userhelper');
const { verifyLogin } = require('../middlewares/verify');
const verify = require('../middlewares/verify');
var router = express.Router();


/* -------------------------------------------------------------------------- */
/*                              User Login Routes                             */
/* -------------------------------------------------------------------------- */

router.get('/login', getLogin)

router.post('/login', postLogin)

router.get('/login-register', getLoginRegister)

router.get('/signup', getSignUp)

router.post('/signup', postSignup)

router.get('/user-logout', logout)

router.get('/', homepage)

router.get('/productdetails/:id', getproductsDetails)

router.get('/error', nodata)

router.get('/cart', verifyLogin, getcart)

router.get('/addtocart/:id',addtocart)

router.post('/delete-cart-items',deleteCart)


router.get('/checkout',verifyLogin, getcheckout)

router.post('/checkout',postcheckout)



router.get('/otp', getOtp)

router.post('/otp', postOtp)

router.get('/confirmotp', confirmOtp)

router.post('/confirmotp', postconfirmOtp)

router.get('/profile', getProfile)

router.post('/change-product-quantity',changeproductquantity)

router.get('/veg',vegetables)


router.get('/ordersuccess',orderplaced)


router.get('/viewOrderProducts/:id',orderProducts)

router.post('/verify-payment',verifyPayment)


router.get('/add-address',addressPage)

router.post('/add-address',postAddressAdd)

router.get('/edit-address/:id',getEditAddress)

router.post('/edit-address',postEditAddress)

router.get('/delete-address/:id',addressdelete)

router.get('/addcheck-address',getCheckoutAddress)


router.post('/addcheck-address',PostCheckoutAddress)

router.get('/order-cancel/:id',orderCancel)



module.exports = router;
