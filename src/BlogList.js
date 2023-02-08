const BlogList = ({ blogs, title, handleDelete }) => {
    return ( 
        <div className="content">
            <h2>{ title }</h2>
            <div className="blog-list">
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    {/* <button itemID="delete-button" onClick={() => handleDelete(blog.id)}>delete blog</button> */}
                </div>
            )) }
            </div>
        </div>
     );
}
 
export default BlogList;