import React from "react";
import "./style.css";

class CreateReview extends React.Component {
  render() {
   const {usersData : {title, mark, text, authorName, authorImg, pros, cons}} = this.props ;
    return (
      <article className="wrapper">
        <img className="userImg itemAlign" src={authorImg} alt="Something " />
        <p className="userName itemAlign">{authorName}</p>
        <h2 className="textTitle itemAlign">{title}</h2>
        <p className="articleText">{text}</p>
        <p className="userMark itemAlign" >{mark} / 10</p>
        <p className="userPros">{pros}</p>
        <p className="userCons">{cons}</p>
      </article>
    );
  }
}

export default CreateReview;
