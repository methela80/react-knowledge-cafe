import PropTypes from 'prop-types'; 
import { BsBookmark} from 'react-icons/bs';

const Blog = ({blog, handleAddToBookmark,handleMarkAsRead}) => {

   const { id, title, cover, author, author_img, posted_date, reading_time,hashtags} = blog;

    return (
        <div className=' mb-20'>
            <img  className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='md:flex justify-between mt-8 mb-11'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className=' text-2xl font-bold'>{author}</h3>
                        <p className=' text-base font-semibold text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                     onClick={() => handleAddToBookmark(blog)}
                    className=' ml-4 text-xl'
                    ><BsBookmark></BsBookmark></button>
                    
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p className=' mb-5'>
                {
                    hashtags.map((hash , idx) => <span key={idx}><a href="">#{hash}</a></span>)

                }
            </p>
            <button
            onClick={() => handleMarkAsRead(id, reading_time)} 
            className='text-blue-500 font-bold underline'>Mark as read</button>
            
           
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
    
}

export default Blog;