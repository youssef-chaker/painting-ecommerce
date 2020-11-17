import styled from "styled-components";

export const PostContainer = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    img { 
      transition: all 150ms ease-in-out;
      box-shadow: 0 6px 9px rgba(0, 0, 0, 0.45), 0 6px 9px rgba(0, 0, 0, 0.45);  
    }
  }
  img {
    border-radius: 5px;
    width: 400px;
    height: auto;
    max-width: 800px;
    max-height: 800px;
    margin-bottom: 16px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35), 0 3px 6px rgba(0, 0, 0, 0.35);  
  }
`;
//
// export const PriceTag = styled.div`
//    position : absolute;
//    background: yellow;
//    width: 3.5rem;
//    height: 1.5rem;
//    bottom: 3rem;
//    right: 0;
//    display: grid;
//    align-items: center;
//    justify-content: center;
//    font-size: 12px;
//    padding: 8px 10px;
//    box-shadow: -1px 2px 3px rgba(0,0,0,.3);
//    &:before {
//     content: "";
//     position: absolute;
//    }
// `

export const PriceTag = styled.span`
    content: "";
    position: absolute;
    bottom: 2.5rem;
    right: 0;
    width: 3.5rem;
    height: 1.5rem;
    font-size: 12px;
    //padding: .5rem .5rem;
    background: lightyellow;
    display: grid;
    align-items: center;
    justify-content: center;
    box-shadow: -1px 2px 3px rgba(0,0,0,.3);
    &:before{
        content: "";
        position: absolute;
        width: 7px;
        height: 100%;
        top: 0;
        right: -6.5px;
        padding: 0 0 7px;
        background: inherit;
        border-radius: 0 5px 5px 0;
    }
    &:after {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        bottom: -5px;
        right: -4.5px;
        background: gray;
        border-radius: 0 5px 5px 0;
    }
`
//
// .ribbon4:before {
//     width: 7px;
//     height: 100%;
//     top: 0;
//     left: -6.5px;
//     padding: 0 0 7px;
//     background: inherit;
//     border-radius: 5px 0 0 5px;
// }
// .ribbon4:after {
//     width: 5px;
//     height: 5px;
//     bottom: -5px;
//     left: -4.5px;
//     background: lightblue;
//     border-radius: 5px 0 0 5px;
// }