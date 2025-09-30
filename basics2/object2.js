const user = {}
// user.name = "faran",
//  console.log(user)

const user1 = {
    email: "farankhan301@gmail.com",
    username: {
            fullname: {
                firstname: "Faran" ,
                lastname: "khan",
            }
    }
}
// console.log(user1.username.fullname.lastname);

const course = {
    instructor : "faran",
    school : "punjab",
    fee: 999,

}
const {fee: fe} = course

console.log( fe);
