import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { getLecture } from '../../api/api';
import * as S from './style'
export default function LecturePage() {
  const { postID } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getContent = async(postID) => {
      const result = await getLecture(postID);
      
      if (typeof(result) === "string") setError("error")
      else setPost(result.result);
    }
    getContent();
  }, [postID]);

  return(
    <S.LectureWrapper>
      <S.LectureDIV>
        <S.FirstWrapper>
          <h2>{post.title}</h2>
          <h3>설명</h3>
          <div><p>{post.description}</p></div>
        </S.FirstWrapper>
        <S.SecondWrapper>
          <ReactPlayer
            url={post.video}
            controls={true}
            width="100%"
            height="100%" />
          <button />
          <p>관심 강의 저장</p>
        </S.SecondWrapper>
        <S.LastWrapper>
          <h3>강의 내용</h3>
          <div><p>{post.content}</p></div>
        </S.LastWrapper>
      </S.LectureDIV>
    </S.LectureWrapper>
  );
}