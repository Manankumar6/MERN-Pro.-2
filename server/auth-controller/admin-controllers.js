const User = require('../models/user')

const Contact = require('../models/contact_schema')

// getAllUsers logic Details

const getAllUsers = async (req, res, next) => {  // Add 'next' parameter
    try {
        const users = await User.find({}, { password: 0 });


        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" });
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);  // Pass the error to the next middleware
    }
};

// single user data

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, {
            password: 0
        })
        return res.status(200).json(data);
    } catch (error) {
        next(error);  // Pass the error to the next middleware
    }
}
// DeleteAll User Logic
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id })
        return res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
        next(error)
    }
}

// getAllContacts logic details
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "NO Contacts Found" })
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

// Update User Data logic
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updataUserData = req.body;
        const updatedData = await User.updateOne({ _id: id }, {
            $set: updataUserData,
        })
        return res.status(200).json({ updatedData })
    } catch (error) {
        next(error)
    }
}

// Delete Contact Logic
const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id })
        return res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUserById, updateUserById, getUserById,deleteContactById }