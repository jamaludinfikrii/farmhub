// var arr = [4,5,3]

// var newArr = arr.map((val,index) => {
//     return val *2
// })




// var data = [
//     {todo : "mandi",user : "fikri"},
//     {todo : "tidur" ,user : "budi"}
// ]

// var output = data.map((val) => {
//     return(
//         `<li className='list-group-item'> 
//              {${val.todo} + " " + '(' +${val.user} + ')'} 
//              <span onClick={() => alert(val.todo)} className='btn btn-outline-danger ml-3'>delete</span> 
//              <span className='btn btn-outline-info ml-3'>edit</span> 
//          </li>`
//     )
// })
// console.log(output)


// // map => create new array based on existing

// console.log(newArr)




var arr = [4,5,6,7]

// Asynchronus
var newArr = arr.map((bebas) => {  // [40,50,60,70]
    return bebas * 10
})



var arr_2 = [
    {nama : "Fikri",alamat : "bandung"},
    {nama : "Budi",alamat : "bandung"},
    {nama : "Seto",alamat : "bandung"},
]
 

var output = arr_2.map((val) => {
    return { data :  val.nama + ', ' + val.alamat}
})

console.log(output)

// [
//     'fikri, bandung',
//     'budi, bandung',
//     'seto, bandung'
// ]





var arrr = [1,2,3,4]
var data =[]

arrr.forEach((val,index)=> {
    data.push(val + index)
})


var obj ={}

obj['nama'] = 'fikri'
console.log(obj)

{nama : 'fikri'}



var product = {
    deskripsi: "Apel Import Berkualitas",
    id: 1,
    id_penjual: 1,
    img_url: "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/5/373801195/373801195_36697d13-fce2-49a1-a26a-19cc570a377d_554_554.jpg",
    name: "Apel Fuji",
    price: "20000",
    stock: 20
}


var penjual = {
    address: "bandung",
    email: "fikri@fikri.com",
    fullname: "jamaludin fikri",
    id: 1,
    password: "123123",
    phone_number: "08234723847",
    role: "penjual",
}