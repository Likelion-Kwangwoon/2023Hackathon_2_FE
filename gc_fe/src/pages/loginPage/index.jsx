import React from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../api/api';
import { logIn } from '../../store/store';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gotoMain = () => {
    navigate("/");
  }
  const formSchema = yup.object({
    username: yup
        .string()
        .required('유저이름을 입력해주세요.'),
    password: yup
      .string()
      .required('비밀번호를 입력해주세요.')
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async(formData) => {
    const result = await signIn({
      username: formData.username,
      password: formData.password,
    });
    switch(result.code) {
      case 1000:
        dispatch(logIn(result.result));
        gotoMain();
        alert(`${result.message}`);
        break;
      case 2001:
        alert(`${result.message}`);
        break;
      default:
        alert('로그인에 실패하였습니다.');
        break;
      }
    
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>유저이름:</label>
          <input
            type="text"
            name="username"
            placeholder='별명을 입력해주세요!'
            {...register('username')}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            placeholder='비밀번호를 입력해주세요!'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}