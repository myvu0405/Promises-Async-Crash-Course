const resource = 'todos1.json';
//NOTE: reject only happens when network error happens (ex : cant reach the api)
fetch(resource)
    .then(res => {
        console.log('resolved', res);
        return data.json()
    })
    .then (data => {
        console.log(data)
    })
    .catch(err => {
        console.log('rejected: ', err)
    })