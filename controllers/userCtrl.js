const Users = require('../model/userModel')
const {APIfeatures}=require ("../lib/features")

const userCtrl = {
    getUsers: async (req, res) => {
        try {
            const features = new APIfeatures(Users.find(), req.query).sorting();

            const result = await Promise.allSettled([
                features.query,
                Users.countDocuments() // count number of users
            ])

            const users = result[0].status === "fulfilled" ? result[0].value : [];
            const count = result[1].status === "fulfilled" ? result[1].value : 0;

            res.json({ status: 'success', count, users });
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await Users.findById(req.params.id).select('-password')
            if (!user) return res.status(400).json({ status: "failed", msg: "User does not exist." })
            res.json({ status: "success", user })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}


module.exports = userCtrl;