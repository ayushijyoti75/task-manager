const app = require('./app.js')

const port = process.env.PORT

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// middleware for maintainance mode
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back after some time')
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 2000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc | docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })



//
// without middleware: new request -> run route handler
// with middleware: new request -> do something -> run route

//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

// const myfunction = async () => {
//     // const password = '784404983fuhdu'
//     // const hashedPassword = await bcrypt.hash(password, 8) // 8 round is recommended

//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare('784404983fuhdu', hashedPassword)
//     // console.log(isMatch)

//     // jsonwebtoken, id--> data to be embedded in the token, base64 encoded jwt token
//     // jwt token --> 1st part --> header that contains information about the kind of token, 2nd --> payload, 3rd-->used to verify the token
//     const token = jwt.sign({_id: 'abc678'}, 'thisismysecret', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismysecret')
//     console.log(data)

// }

// myfunction()

app.listen(port, () => {
    console.log('Server is up on the port ' + port)
})


// const main = async () => {
//     // const task = await Task.findById('66378fb24e0014ed06789253')
//     // await task.populate('owner')
//     // console.log(task.owner)

//     const user = await User.findById('6637a8e82a049683c1874981')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()