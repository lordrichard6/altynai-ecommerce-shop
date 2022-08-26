import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        // name: { type: String, required: true },
        // email: { type: String, required: true, unique: true },
        // password: { type: String, required: true },
        // isAdmin: { type: Boolean, required: true, default: false }
        name: { type: String, required: false },
        email: { type: String, required: false, unique: true },
        password: { type: String, required: false },
        isAdmin: { type: Boolean, required: true, default: false }
    },
    {
        timestamps: true,
    }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User