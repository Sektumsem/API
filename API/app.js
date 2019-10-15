const http=new myHHTP;
const users=http.get('https://jsonplaceholder.typicode.com/users')
.then(data=> console.log("DATA Recived: ",data))
.catch(error=>console.log(error))