import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextSmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {useContext} from "react";
import {Link} from "react-router-dom";

const Post = ({post}) => {

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
                <div className="item">
                     <TextSmsOutlinedIcon/>
                    12 comments

                </div>
                <div className="item">
                   <ShareOutlinedIcon/>
                    99 shares

                </div>
            </div>
        </div>
        </div>

    );
};

export default Post;