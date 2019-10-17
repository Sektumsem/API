const http=new myHHTP;
/*const users=http.get('https://jsonplaceholder.typicode.com/users')
.then(data=> console.log("DATA Recived: ",data))
.catch(error=>console.log(error))*/

const url='https://jsonplaceholder.typicode.com/users';
const data={
    name:'John Doe',
    username: 'johndoe',
    email:'jdoe@gmail.com'
}

/*http.post(url,data)
.then(data=>console.log(data))
.catch(error=> console.log(error));*/

http.put('https://jsonplaceholder.typicode.com/users/2',data)
.then(data=>console.log(data))
.catch(error=> console.log(error));