import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextSmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Comment} from "@mui/icons-material";
import Comments from "../comments/Comments.jsx";

const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false);
    //temporary
    const liked = true;
    return (
        <div className="post">
            <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.img} alt=""/>
                    <div className="details">
                            <Link to = {`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}} >
                            <span className="name">{post.name}</span>
                        </Link>
                        <span className="date">1 minute ago</span>
                    </div>

                </div>
                <MoreHorizIcon/>
            </div>

            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt=""/>
            </div>
            <div className="info">
                <div className="item">
                    {liked ? <FavoriteBorderOutlinedIcon/> : <FavoriteOutlinedIcon/>}
                    12 likes

                </div>
                <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                     <TextSmsOutlinedIcon/>
                    12 comments

                </div>
                <div className="item">
                   <ShareOutlinedIcon/>
                    99 shares

                </div>
            </div>
                {commentOpen && <Comments/>}
        </div>
        </div>

    );
};

export default Post;