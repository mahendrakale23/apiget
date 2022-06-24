

let cl=console.log;
 
 const info=document.getElementById("info");


let apiUrl="https://jsonplaceholder.typicode.com/todos";
  cl(apiUrl);


let xhr=new XMLHttpRequest();

xhr.open("GET",apiUrl,true);


xhr.onload=function(){
    cl(xhr.response)
    let data=JSON.parse(xhr.response);
    print(data)
}

xhr.send();



function print(arr){
    let result="";
    arr.forEach(ele => {
    result+=`
         <tr>
         <td>${ele.id}</td>
         <td>${ele.userId}</td>
         <td>${ele.title}</td>
         <td>${ele.completed}</td>
         </tr>

    
    `
    });
    info.innerHTML=result;
}



















