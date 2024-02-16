const express = require('express');
const {getAllUsers,getAllContacts,deleteUserById,updateUserById,getUserById,deleteContactById} = require('../auth-controller/admin-controllers');
const authMiddleware = require('../middleware/auth_middleware')
const router = express.Router();

router.route('/users').get(authMiddleware,getAllUsers)
router.route('/users/:id').get(authMiddleware,getUserById)
router.route('/users/delete/:id').delete(authMiddleware,deleteUserById)
router.route('/users/update/:id').patch(authMiddleware,updateUserById)
router.route('/contact').get(authMiddleware,getAllContacts)
router.route('/contact/delete/:id').delete(authMiddleware,deleteContactById)

module.exports = router;