// Async Javascript And Xml

/*******| les promesses |*******/

console.log('Je vais acheter cette moto');

const myBikePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Bravo, vous venez d\'acheter votre première moto');
        reject('Désolé, cette moto n\'est plus disponible');
    }, 5000);
});

console.log('Je continue de marcher');

myBikePromise.then((data) => {
    console.log(data);
})
.catch((data2) => {
    console.log(data2);
});

/*******| reject |*******/

let posts = [];
const allposts = document.querySelector('#allposts');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/posts`)
    .then((result) => result.json())
    //.then((allPosts) => console.log(allPosts));
    .then((blogPosts) => {
    blogPosts.forEach(bp => posts.push(bp));
    display(posts);
});

function display(collection) {
    const list = posts.map(bp => 
        `
            <a href="#" class="list-group-item list-group-item-action">
            <small>${bp.id} days ago</small>
            <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${bp.title}</h5>  
                </div>
                    <p class="mb-1">${bp.body}</p>
            </a>    
        `)
                      .join('');
    allposts.innerHTML = list;
  }  