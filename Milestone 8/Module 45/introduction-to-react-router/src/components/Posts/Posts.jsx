import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px'
        }}>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;