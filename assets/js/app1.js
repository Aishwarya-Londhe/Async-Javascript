let cl = console.log;

// fetchdata function use to fetch data and templating function use for showing data on UI.

const blogsContainer = document.getElementById("blogsContainer")

let blogs = [
    {title : "Angular 15 Update", content : "It supports Satndalone Component"},
    {title : "ES6 - Promise", content : "ES6 gives us Promise to handle Async Operations"}
]


function createBlog(blog, callBackFun) {
    setTimeout(() => {
        blogs.push(blog);
        cl(blogs, `New blog is created`);
        callBackFun()
    }, 3000);
}

function fetchdata(){
    setTimeout(() => {
        cl(blogs, `All blogs are fetched successfully !!!`)
        templatingCard(blogs);
    }, 1000);
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

createBlog({title : "ES7 - Async Await", content : "ES7 gives us Async-Await to handle Async Operations"}, fetchdata)
// templatingCard(blogs);
// fetchdata()

// CallBack Hell >> there is so much problems by using callback function, readability of code get less.

// therefore solving these issue we get ES6 - promise.