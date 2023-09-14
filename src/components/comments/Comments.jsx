import "./comments.scss"
import {useContext} from "react";
import {AuthenticationContext} from "../../context/AuthenticationContext.jsx";

const Comments = () => {
    const {currentUser} = useContext(AuthenticationContext);
    const comments = [
        {
            id: "1",
            name: "Safak Kocaoglu",
            userId: 1,
            desc: "I love it, it's so cool!",
            profilePicture: "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

        },
        {
            id: "2",
            name: "Janell Shrum",
            userId: 2,
            desc: "I love it, it's so cool!",
            profilePicture: "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

        },
        {
            id: "3",
            name: "Alex Durden",
            userId: 3,
            desc: "I love it, it's so cool!",
            profilePicture: "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

        },
        {
            id: "4",
            name: "Dora Hawks",
            userId: 4,
            desc: "I love it, it's so cool!",
            profilePicture: "https://images.pexels.com/photos/3768167/pexels-photo-3768167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

        },
    ];

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePicture} alt=""/>
                <input type="text" placeholder="write a comment"/>
                <button>Send</button>
            </div>
            { comments.map((comment) => (
            <div className="comment">
                <img src={comment.profilePicture} alt=""/>
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 min ago</span>
            </div>
            ))}
        </div>
    );

};

export default Comments;