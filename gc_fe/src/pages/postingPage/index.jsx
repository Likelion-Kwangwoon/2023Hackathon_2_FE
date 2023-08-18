import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {  useNavigate }  from 'react-router-dom';
import { lectureUpload } from '../../api/api';
import { categories } from '../../components/Category/categories';
import noimg from '../../assets/noimg.gif'
import axios from 'axios';

import * as S from './style';



export default function PostingPage() {
  const [videoPreview, setVideoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(noimg);

  const navigate = useNavigate()
  const gotoMain = () => {
    navigate("/");
  }
  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required('제목을 입력해주세요.'),
    category: yup
      .string()
      .required('카테고리를 선택해주세요.'),
    imageFile: yup
      .mixed()
      .required('썸네일 이미지를 선택해주세요.')
      .test('fileSize', '이미지 파일이 너무 큽니다.', (value) => {
        if (!value) return true; // 이미지 파일이 없는 경우는 통과
        // 이미지 파일의 크기를 제한 (5MB 이하)
        return value[0].size <= 100 * 1024 * 1024; // 5MB
      }),
    description: yup
      .string()
      .required('간단한 설명을 입력해주세요.'),
    videoFile: yup
      .mixed()
      .required('동영상 파일을 선택해주세요.')
      .test('fileSize', '동영상 파일이 너무 큽니다.', (value) => {
        if (!value) return true; // 동영상 파일이 없는 경우는 통과
  
        // 동영상 파일의 크기를 제한 (100MB 이하)
        return value[0].size <= 100 * 1024 * 1024; // 100MB
      }),
    content: yup
      .string()
      .required('내용을 입력해주세요.'),
  });
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: {errors}
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(formSchema),
  });

  

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('category', data.category);
    formData.append('image', data.imageFile[0]);
    formData.append('description', data.description);
    formData.append('video', data.videoFile[0]);
    formData.append('content', data.content);
    console.log(data.imageFile[0])
    try {
      const response = await lectureUpload(formData);
      console.log(response)
      alert(response.message);
      gotoMain()
    } catch (error) {
      console.error('Error uploading video:', error);
      setError('uploadError', {
        type: 'manual',
        message: '강의 업로드 중 오류가 발생했습니다.',
      });
    }
  };

  const handleVideoFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile) {
      const videoObjectUrl = URL.createObjectURL(selectedFile);
      setVideoPreview(videoObjectUrl);
    }
    else {
      setVideoPreview(null);
    }
  };
  const handleImageFileChange = async(e) => {
    const selectedFile = e.target.files[0];
    console.log("selectedFile")
    if (selectedFile) {
      const ImageObjectUrl = URL.createObjectURL(selectedFile);
      setImagePreview(ImageObjectUrl);
    }
    else {
      setImagePreview(noimg);
    }
  };
  return (
    <S.PostWrapper>
      <S.UploadForm onSubmit={handleSubmit(onSubmit)}>
        <S.FirstWrapper>
        <h2>강의 등록</h2>
        <div>
          <label>제목</label>
          <input type="text" name="title" {...register('title')} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label>카테고리</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">카테고리 선택</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.category}>
                    {category.name}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <div>
          <label>썸네일 이미지</label>
          <S.FileInputContainer>
            <S.HiddenInput
              type="file"
              name="imageFile"
              accept="image/*"
              {...register('imageFile', {
                onChange: e=> {handleImageFileChange(e)}
              })}
            />
            <S.CustomButton>파일 선택</S.CustomButton>
          </S.FileInputContainer>
        </div>
        {imagePreview && (
          <div>
            <img src={imagePreview} width="300" alt='Thumbnail' />
          </div>
        )}
        <div>
          <label>설명</label>
          <textarea name="description" {...register('description')} />
        </div>
        </S.FirstWrapper>
        <S.SecondWrapper>
          <div>
            <label>동영상 업로드</label>
            <S.FileInputContainer>
            <S.HiddenInput
              type="file"
              name="videoFile"
              accept="video/*"
              {...register('videoFile', {
                onChange: e=> {handleVideoFileChange(e)}
              })}
            />
            <S.CustomButton>파일 선택</S.CustomButton>
          </S.FileInputContainer>
          </div>
          {videoPreview && (
            <div>
              <label>미리보기</label>
              <video width="300" controls>
                <source src={videoPreview} type="video/mp4" />
              </video>
            </div>
          )}
        </S.SecondWrapper>
        <S.LastWrapper>
          <div>
            <label>내용</label>
            <textarea type="text" name="content" {...register('content')} />
          </div>
          <S.UploadBtn type="submit">등록</S.UploadBtn>
          {Object.keys(errors).length > 0 && (
          <div>
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}
        </S.LastWrapper>
      </S.UploadForm>
    </S.PostWrapper>
  );
}
