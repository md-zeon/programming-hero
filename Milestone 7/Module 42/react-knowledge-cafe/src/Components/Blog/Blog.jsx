import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa6';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover_pic, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full h-96 mb-8' src={cover_pic} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-6">
                    <img className='w-14 rounded-full' src={author_img} alt={author} />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl mb-3">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='mt-4 underline text-purple-800 font-medium'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;