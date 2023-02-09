let cl = console.log;

// Promise
// Promise is a javaScript object which gives some value in future
// It used to handle Async operations in javaScript

// States of Promise
// Pending >> Waiting for result
// fullfilled >> The action related to the promise is success
// reject >> The action related to the promise is failed
// settled >> Promise either fullfilled or reject

// Benefits of Promise
// 1 Improve readability of the code
// 2 Better handling of Async operations
// 3 Better error handling
// 4 Better flow of control definations

// let promise = new Promise((resolve, reject) => {
//     // api call
//     setTimeout(() => {
//         let error = Math.random() >= .5 ? false : true;
//         cl(error)
//         if(!error){
//             resolve(`Successfully Login !!!`)
//         }else {
//             reject(`Invalid Username or Password`)
//         }
//     }, 3000);
// })

// promise
//     .then((res) => {
//         cl(res)
//     })
//     .catch((err) => {
//         cl(err)
//     })

const blogsContainer = document.getElementById("blogsContainer")

let blogs = [
    { title: "Angular 15 Update", content: "It supports Satndalone Component" },
    { title: "ES6 - Promise", content: "ES6 gives us Promise to handle Async Operations" }
]


function createBlog(blog) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // api call
            let error = Math.random() >= .5 ? false : true;
            if (!error) {
                blogs.push(blog);
                resolve(`Post is Created Successfully`)
            } else {
                reject(`Something went wrong while Creating Post`)
            }
        }, 3000);
    })
}

function fetchdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // api call
            let error = Math.random() >= .5 ? false : true;
            if (!error) {
                resolve(`Posts are fetched Successfully`)
            } else {
                reject(`Something went wrong while Fetching Post`)
            }
        }, 1000);
    })
}

function templatingCard(arr) {
    let result = '';
    arr.forEach(blog => {
        result += `
                    <div class="card mb-4">
                        <div class="card-header">${blog.title}</div>
                        <div class="card-body">${blog.content}</div>
                    </div>
                    `
    });
    blogsContainer.innerHTML = result;
}

async function init() {
    try {
        await createBlog({ title: "ES7 - Async Await", content: "ES7 gives us Async-Await to handle Async Operations" })
        let result = await fetchdata();
        Swal.fire({
            icon: 'success',
            title: result,
            showConfirmButton: false,
            timer: 4000
        })
        templatingCard(blogs);
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 7000
        })
    }
}


init();

