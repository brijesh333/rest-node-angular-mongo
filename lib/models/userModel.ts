import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId: String,
    password: String,
    guardian: {
        name: String,
        contactNo: String
    },
    userDetail: {
        firstName: String,
        lastName: String,
        dob: String,
        contactNo: String,
        emailId: String,
        gender: String,
        addressDetails: {
            address: String,
            city: String,
            state: String,
            pincode: String
        }
    },
    emargencyContactDetail: {
        name: String,
        contactNo: String
    }
});

let User = mongoose.model("User", UserSchema);

// make this model available
module.exports = User;