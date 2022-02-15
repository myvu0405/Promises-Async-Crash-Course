const getTodos = (resource) => {

    return new Promise ( (resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);

            if(request.readyState ===4 && request.status===200) { //request sent successfully and response found
                // console.log(request.responseText)
                const data = JSON.parse(request.responseText);
                resolve(data);
                
            } else if (request.readyState ===4) {
                // console.log('Could not fetch data!');
                reject('Error happens!')
                
            }
        })
        request.open('GET', resource);
        request.send(); 
    })
}

const resource1 = 'https://jsonplaceholder.typicode.com/todos/';
const resource2 = 'todo1.json';
const resource3 = 'todo2.json';

//chaining promises
getTodos( resource1)
    .then(data => {
        console.log('promise 1 resolved: ',data);
        return getTodos(resource2);
    })
    .then(data => {
        console.log('promise 2 resolved: ',data);
        return getTodos(resource3);

    })
    .then(data=> {
        console.log('promise 3 resolved: ',data);

    })
    .catch(err => console.log(err))


/*
//promise
const getSmth= () => {
    return new Promise ( (resolve, reject ) => {
        resolve('some data');
        reject('Some ERROR');

    })
}

getSmth().then(data => console.log(data), err => console.log(err))
//or:
// getSmth().then(data => console.log(data)).catch( err => console.log(err))
*/