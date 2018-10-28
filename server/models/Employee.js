import mongoose, { Schema } from 'mongoose';

const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    admissionDate: { type: Date, required: true },
    photo: {
        data: Buffer, contentType: String,
    },
    employeeFunction: { type: String, required: true },
    rg: { type: String, required: true },
    cpf: { type: String, required: true },
    dateBirth: { type: Date, required: true },
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

const Employee = mongoose.model('Employee', EmployeeSchema);
export default Employee;