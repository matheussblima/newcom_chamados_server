import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
    name: { type: String, required: true },
    cnpj: {
        type: String,
        maxlength: [14, 'The CNJP code is not the correct size'],
        minlength: [14, 'The CNPJ code is not the correct size'],
        required: true
    },
    contractStartDate: { type: Date, required: true },
    contractValidity: { type: Number, required: true },
    photo: {
        data: Buffer, contentType: String,
    },
    phone: {
        validate: {
            validator: (num) => {
                const regex = /^\d{10}$/;
                return (num == null || num.trim().length < 1 || regex.test(num))
            },
            message: 'Provided phone number is invalid.'
        },
        required: true,
    },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: {
        type: String, required: true,
        minlength: [2, 'only two letters'],
        maxlength: [2, 'only two letters']
    },
    neighborhood: { type: String, required: true },
    cep: {
        type: String, required: true,
        minlength: [9, 'The zip code is not the correct size'],
        maxlength: [9, 'The zip code is not the correct size']
    },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
});

const Customer = mongoose.model('Customer', CustomerSchema);
export default Customer;
