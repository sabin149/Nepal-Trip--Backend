const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    review: {
        type: String
    },
    hotel_rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 0
    },
    tag: Object,
    reply: mongoose.Types.ObjectId,
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    user: { type: mongoose.Types.ObjectId, ref: 'user' },
    hotelId: mongoose.Types.ObjectId,
    hotelUserId: mongoose.Types.ObjectId,
},
    {
        timestamps: true
    })

module.exports = mongoose.model("review", reviewSchema)