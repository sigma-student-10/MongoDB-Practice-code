const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email:String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete( "6a4bcbe9d931470647258da6" ).then((res) => {
  console.log(res);
});

// User.findOneAndUpdate({ name: "Bruce" }, {age: 42 }, {new: true})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })

// User.findById("6a4bc755142beb676a22e551")
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.insertMany([
//   { name: "Tony", email: "tony@gmai.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 40 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 50 },
// ]).then((res) => {
//   console.log(res);
// });


// const user2 = new User({
//   name: "Eve",
//   email: "eve@gmail.com",
//   age: 30,
// });

// user2.save()
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });