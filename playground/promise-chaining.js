require('../src/db/mongoose')

const User = require('../src/models/user')

// User.findByIdAndUpdate('663634bd314464f5c4e8d372', { age: 20 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 22 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const UpdateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

UpdateAgeAndCount('6635d4e9ba2b157322bcbfdb', 25).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})