import React from "react";
import Comment from "./Comment.jsx";

const commentsData = [
  {
    id: 1,
    profileImage: "./src/assets/mario.png", 
    username: "Mario",
    password: "1234",
    content: "안녕하세요 ㅎㅎ"
  },
  {
    id: 2,
    profileImage: "./src/assets/luigi.png",
    username: "Luigi",
    password: "5678",
    content: "반갑읍니다,,,,,,"
  },
  {
    id: 3,
    profileImage: "./src/assets/peach.png",
    username: "Peach",
    password: "9876",
    content: "zz"
  }
];

function CommentList() {
  // 2) map() 함수를 통해 commentsData 배열을 순회하여, 각각 <Comment /> 컴포넌트를 생성
  return (
    <section className="comments-section">
      <ul className="comments-list">
        {commentsData.map((comment) => (
          <li key={comment.id}>
            <Comment
              profileImage={comment.profileImage}
              username={comment.username}
              password={comment.password}
              content={comment.content}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CommentList;