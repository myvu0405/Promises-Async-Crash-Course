const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);

        if(request.readyState ===4 && request.status===200) { //request sent successfully and response found
            // console.log(request.responseText)
            const data = JSON.parse(request.responseText);
            callback(undefined, data)
        } else if (request.readyState ===4) {
            // console.log('Could not fetch data!');
            callback('Error: Could not fetch data!', undefined)
        }
    })
    request.open('GET', resource);
    request.send(); 
 
}

const resource = 'https://jsonplaceholder.typicode.com/todos/';

getTodos( resource, (err, data) => {
    //console.log(err,data) ;
    if (err) console.log(err)
    else console.log(data)
});

/*
//callback hell
getTodos(url1, (err,data) => {
    console.log(data);
    getTodos(url2, (err,data) => {
        console.log(data);
        getTodos(url3, (err,data) => {
            console.log(data);
        })
    })
})*/

