import "./stories.scss";
import {useContext} from "react";
import {AuthenticationContext} from "../../context/AuthenticationContext.jsx";

const Stories = () => {
    const {currentUser} = useContext(AuthenticationContext)

    //temporary
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: "Jane Doe",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 4,
            name: "Jane Doe",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }

    ];
    return (
        <div className="stories">

                <div className="story">
                    <img src={currentUser.profilePicture} alt=""/>
                    <span> {currentUser.name} </span>
                    <button>+</button>
                </div>

            {stories.map((story) => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt=""/>
                    <span> {story.name} </span>
                </div>
            ))}

        </div>
    );
};

export default Stories;