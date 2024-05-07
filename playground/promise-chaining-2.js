require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('6636271c5303cfa7d34e4442').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const DeleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

DeleteTaskAndCount('66364b4ff90e9d91919fecc4').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})