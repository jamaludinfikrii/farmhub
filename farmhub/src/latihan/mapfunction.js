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