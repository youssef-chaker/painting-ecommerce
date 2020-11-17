import React from "react";
import {PostContainer,PriceTag} from "./post.styles";

const Post = ({title, image, price, ...props}) => (
    <PostContainer {...props} >
        <img alt={title} src={image}/>
        <PriceTag>{price} DT</PriceTag>
    </PostContainer>
);

export default Post;
