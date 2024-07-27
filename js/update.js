const arr = [
    {
        id:1,title:"X",author:"Md sohag",price:12,quantity:50
    },
    {
        id:2,title:"F",author:"Md sohag",price:15,quantity:40
    }

 
]

const updatedArr = arr.map((item)=>item.id===1?null:item)


console.log(updatedArr)