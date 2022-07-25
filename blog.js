/**
 * @typedef {{
 *  title: string,
 *  date: string,
 *  summary: string
 * }} blog
 */
import DOMPurify from './DOMPurify/dist/purify.es.js';
export function generateBlogId() {
    return crypto.randomUUID();
};

export const exampleBlog = {
    "title": "Lopsum",
    "date": "3/2/2000",
    "summary": "Today is a good day."
};

function loadBlogs() {
    return JSON.parse(localStorage.getItem('blogs')) || {};
}

function archiveBlogs(blogs) {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

export function insertBlog(blog) {
    const blogs = loadBlogs();
    const blogId = generateBlogId();

    blogs[blogId] = blog;
    archiveBlogs(blogs);
    return blogId;
}

export function selectBlog(blogId) {
    const blogs = loadBlogs();
    return blogs[blogId];
}
export function selectAllBlogs() {
    const blogs = loadBlogs();
    return blogs;
}

export function updateBlog(blogId, blog) {
    const blogs = loadBlogs();
    blogs[blogId] = blog;
    archiveBlogs(blogs);
}

export function deleteBlog(blogId) {
    const blogs = loadBlogs();
    if (!(blogId in blogs)){
        return false;
    } 
    delete blogs[blogId];
    archiveBlogs(blogs);
    location.reload();
    //renderAllBlogs(document.getElementById('blogs'));
    return true;
}

export function countBlogs() {
    const blogs = loadBlogs();
    return Object.keys(blogs).length;
}

export function renderBlog(blogId, blog) {
    const template = document.getElementById("blog-template");

    const blogE1 = template.content.cloneNode(true);
    blogE1.children[0].dataset.blogId = blogId;

    const titleH1 = blogE1.querySelector('blog-title > h1');
    titleH1.textContent = blog.title;

    const dateH2 = blogE1.querySelector('blog-title > h3');
    dateH2.textContent = `Posted on: ${blog.date}`;

    const summaryP = blogE1.querySelector('blog-summary > p');
    summaryP.textContent = `Summary: ${blog.summary}`;

    const editP = blogE1.querySelector('blog-post > img#edit');
    editP.setAttribute('data-blogID', blogId);
    editP.addEventListener('click', () => { 
        editBlog(blogId);
    });
    
    const deleteP = blogE1.querySelector('blog-post > img#delete');
    deleteP.setAttribute('data-blogID', blogId);
    deleteP.addEventListener('click', () => {
        deleteBlog(blogId);
    });

    return blogE1;
}

export function renderAllBlogs(blog_container) {
    const blogs = selectAllBlogs();

    for(const [blogId, blog] of Object.entries(blogs)){
        const blogE1 = renderBlog(blogId, blog);
        const existingBlog = blog_container.querySelector(`[data-blog-id="${blogId}"]`);
        if (existingBlog) {
            existingBlog.remove();
        }

        blog_container.appendChild(blogE1);
    }
    return true;
}
export function deleteAll() {
    const blogs = selectAllBlogs();

    for(const [blogId, blog] of Object.entries(blogs)){
        deleteBlog(blogId);
    }
    renderAllBlogs(document.getElementById('blogs'));
}




export function add(){
    document.getElementById('User_result').style.display = 'none';
    const blog_title = DOMPurify.sanitize(document.getElementById('title').value);
    const blog_date = DOMPurify.sanitize(document.getElementById('date').value);
    const blog_summary = DOMPurify.sanitize(document.getElementById('summary').value);

    const blog_container = document.getElementById('blogs');
    const blog = {};
    blog['title'] = blog_title;
    blog['date'] = blog_date;
    blog['summary'] = blog_summary;

    insertBlog(blog);
    renderAllBlogs(blog_container);
}

export function showDialog(){
    document.getElementById('User_result').style.display = 'block';
}

export function cancel(){
    document.getElementById('User_result').style.display = 'none';
}
export function editBlog(blogId){
    const blogs = loadBlogs();
    if (!(blogId in blogs)){
        return false;
    } 
    document.getElementById('title2').value = blogs[blogId]['title'];
    document.getElementById('date2').value = blogs[blogId]['date'];
    document.getElementById('summary2').value = blogs[blogId]['summary'];

    document.getElementById('save_btn2').addEventListener('click', () =>{
        saveEdits(blogId);
    });
    document.getElementById('cancel_btn2').addEventListener('click', () => {
        document.getElementById('Edit_result').style.display = 'none';
    });

    document.getElementById('Edit_result').style.display = 'block';
    //renderAllBlogs(document.getElementById('blogs'));
    return true;
}

function saveEdits(blogId){
    const blogs = loadBlogs();
    blogs[blogId]['title'] = DOMPurify.sanitize(document.getElementById('title2').value);
    blogs[blogId]['date'] = DOMPurify.sanitize(document.getElementById('date2').value);
    blogs[blogId]['summary'] = DOMPurify.sanitize(document.getElementById('summary2').value);
    document.getElementById('Edit_result').style.display = 'none';
    archiveBlogs(blogs);
    renderAllBlogs(document.getElementById('blogs'));
}
