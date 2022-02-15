const getTodos = async (resource) => {

    const response = await fetch(resource);
    if (response.status!=200) {
        throw new Error('Error: cannot fetch data');
    }
    const data = await response.json();
    console.log(data);

    return data;
}

getTodos('todos1.json')
    .then( data => {
        console.log('resolved: ', data);
    })
    .catch(err => console.log(err))