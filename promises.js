const posts = [
    {title: 'post 1', body: 'post 1 body'},
    {title: 'post 2', body: 'post 2 body'}

];

function getPosts() {
    setTimeout(() => {
        let output='';
        posts.forEach( (post, index) => {
            output+=`<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost (post) {

    return new Promise( (resolve, reject) =>{

        setTimeout(() => {
        
            posts.push(post);

            const error=false;

            if(!error) {
                resolve();
            } else {
                reject('Error happens!');
            }

        }, 2000);

    })
    
}


// createPost({title:'post 3', body: 'post 3 body'})
//     .then( getPosts)
//     .catch(error => console.log(error))

//promise.all

const promise1 = Promise.resolve('HEllo');
const promise2 = 10;
const promise3 = new Promise ( (resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye!');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

Promise.all([promise1,promise2,promise3,promise4]).then( (values) => console.log(values))