/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// ....map function....
function PrintDeveloperswithMap() {
  arr.map(printingThroghMap);
  function printingThroghMap(arrayItem){
    if(arrayItem.professio === "developer");{
      console.log(arrayItem);
    }
  }
}
// ....for each function...
function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printingThroghForEach);
  function printingThroghForEach(arrayItem){
    if(arrayItem.profession ==="developer"){
      console.log(arrayItem);
    }
  }
}
// .....add data function....
function addData() {
  //Write your code here
  let newObj={id:4,name:"susan",age:"20",profession:"intern"}
arr.push(newObj);
console.log(arr);
}

// .....remove admin function....

function removeAdmin() {
  //Write your code here
  let filtered_arr=arr.filter(function (val){
    if(val.profession !=="admin"){
      // filtering
      returnval;
    }
  })
  console.log(filtered_arr);
}
// .....concatenate array function....
function concatenateArray() {
  //Write your code here
  let arr2=[
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}

  ]
  let concatArray=arr.concat(arr2);
  console.log(concatArray);
}
