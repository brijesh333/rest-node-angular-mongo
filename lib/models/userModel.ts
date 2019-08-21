import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // firstName: {
    //     type: String,
    //     required: 'Enter a first name'
    // },
    // lastName: {
    //     type: String,
    //     required: 'Enter a first name'
    // },
    // email: {
    //     type: String            
    // },
    // company: {
    //     type: String            
    // },
    // phone: {
    //     type: Number            
    // },
    // created_date: {
    //     type: Date,
    //     default: Date.now
    // }
    name:String,
    userId:String
});

let User = mongoose.model("User", UserSchema);

// make this model available
module.exports = User;