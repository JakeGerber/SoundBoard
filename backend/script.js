


const mongoose = require("mongoose")
const User = require("./User")

const uri = "";


mongoose.connect(uri).then(() => {
    console.log("Connected!")
})
.catch((err) => {
    console.log("error")
})

run()
async function run() {
    const user = new User({ name: "Kyle", age: 26})
    await user.save()
    console.log(user)
}

console.log("hi")