import "./posts.scss";
import Post from "../post/Post.jsx";

const Posts = () => {

    //temporary
    const posts = [
        {
            id: "1",
            name: "Safak Kocaoglu",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Love For All, Hatred For None",
            img:  "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

        },
        {
            id: "2",
            name: "Janell Shrum",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Love For All, Hatred For None",
            img:  "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

        },
        {
            id: "3",
            name: "Alex Durden",
            userId: 3,
            profilePic: "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Love For All, Hatred For None",
            img:  "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

        },
        {
            id: "4",
            name: "Dora Hawks",
            userId: 4,
            profilePic: "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Love For All, Hatred For None",
            img:  "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

        },
    ];
    return (
        <div className= "posts">
            {posts.map(post=> (
             <Post post = {post} key={post.id}/>
            ))}
        </div>
    );
};

export default Posts;