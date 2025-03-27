import React from "react";

function Comment({profileImage, username, password, content}) {
    return (
        <div className="comment-container">
            <div className="comment-header">
                <img className="comment-profile" src={profileImage} alt="프로필"/>
                <input
                    className="comment-username"
                    type="text"
                    placeholder="이름"
                    value={username}
                />
                <input
                    className="comment-password"
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                />
            </div>
            <div className="comment-body">
                <input
                    className="comment-content"
                    type="text"
                    placeholder="로그인 댓글만 허용한 블로그입니다"
                    value={content}
                />
            </div>
        </div>
    );
}

export default Comment;