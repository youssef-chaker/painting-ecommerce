import React from "react";
import Post from "../../components/post/post.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {selectPosts} from "../../redux/shop/shop.selectors";
import {ShopContainer} from "./shop.styles";
// import Masonry,{ResponsiveMasonry} from "react-responsive-masonry";
import {CSSGrid, measureItems, makeResponsive} from 'react-stonecutter';
// import Masonry from 'react-masonry-css'
import Masonry from 'react-masonry-component';

const Grid = makeResponsive(CSSGrid, {
    maxWidth: 1920,
    minPadding: 100
});

const ShopPage = ({posts}) => {
    return (
        // <ShopContainer>
        //         {/*{posts.map((post) => (*/}
        //         {/*    <Post key={post.id} title={post.title} price={post.price} image={post.image}/>*/}
        //         {/*))}*/}
        //         <ResponsiveMasonry columnsCountBreakPoints={{350: 1,750:2 ,1500: 3,2400:4}}>
        //             <Masonry columnsCount={5} gutter={"1rem"} style={{maxWidth: "1600px",margin:"auto"}}  >
        //                 {
        //                     posts.map(post =>
        //                         <img alt="khra" key={post.id} src={post.image} style={{width:"auto",height:"auto",maxHeight:"600px",maxWidth:"550px"}}/>
        //                     )
        //                 }
        //             </Masonry>
        //         </ResponsiveMasonry>
        // </ShopContainer>

        // <Grid>
        //      {
        //          posts.map(
        //              post =>
        //              <li key={post.id}>
        //                  <img alt="khra" src={post.image}/>
        //              </li>
        //          )
        //      }
        //  </Grid>
        //  <Masonry className="masonry" columnClassName="masonry-column" breakpointCols={1}>
        //      {
        //          posts.map(post =>
        //              <img className="masonry-column" key={post.id} alt="khra" src={post.image} style={{height:"auto",width:"auto",maxHeight:"800px",maxWidth:"800px"}}/>
        //          )
        //      }
        //  </Masonry>
        <Masonry style={{margin: "auto"}} options={{gutter: 16, fitWidth: true}}>
            {
                posts.map(post =>
                    <Post image={post.image} key={post.id} price={post.price} title={post.title}/>
                )
            }
        </Masonry>

    );
};

const mapStateToProps = createStructuredSelector({
    posts: selectPosts,
});

export default connect(mapStateToProps)(ShopPage);
