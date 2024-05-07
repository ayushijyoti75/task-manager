const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL)

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     }, 
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if(!validator.isEmail(value)) {
//                 throw new Error('Email is not valid. Try again!!')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         validate(value) {
//             if(value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('Error!! Password cannot contain the word password')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '  Mary  ',
//     age: 24,
//     email: 'MARRYYY55@GMAIL.com',
//     password: '     123rtdhbs    '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const Tasks = mongoose.model('Tasks', {
//     name: {
//         type: String
//     }, 
//     description: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const me = new Tasks({
//     name: 'Ayush',
//     description: 'Junior engineer'
// })

// me.save().then(() => {
//     console.log('Saved successfully!', me)
// }).catch((error) => {
//     console.log('Error', error)
// })