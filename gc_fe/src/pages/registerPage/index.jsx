import React from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../api/api';

export default function RegisterPage() {
  // const watchEmail = watch('email', '');
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/login");
  }
  const formSchema = yup.object({
    username: yup
        .string()
        .required('유저이름을 입력해주세요.'),
    age: yup
      .string()
      .test('is-number', '숫자로 입력해주세요!', (value) => !isNaN(value))
      .min(0, '최소 0세 이상 가능합니다')
      .required('나이를 입력해주세요.'),
    password: yup
      .string()
      .required('영문, 숫자포함 8자리를 입력해주세요.')
      .min(8, '최소 8자 이상 가능합니다')
      .max(15, '최대 15자 까지만 가능합니다')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
        '영문 숫자포함 8자리를 입력해주세요.'
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], '비밀번호가 다릅니다.'),
  });
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async(formData) => {
    // 실제 회원가입 처리 로직을 여기에 추가
    const result = await signUp({
      username: formData.username,
      password: formData.password,
      age: formData.age,
    });
    switch(result.code) {
      case 1000:
        gotoLogin();
        alert(`${result.message}`);
        break;
      case 2000:
        alert(`${result.message}`);
        break;
      default:
        alert('회원가입에 실패하였습니다.');
        break;
      }
    console.log('Form submitted with data:', formData);
  };

  // // 모의 이메일 중복 체크 함수
  // const checkEmailAvailability = email => {
  //   // 모의 API 요청 (프론트엔드에서만 동작)
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       const isAvailable = email !== 'test@example.com'; // 모의 중복 여부 확인
  //       resolve(isAvailable);
  //     }, 1000); // 1초 딜레이
  //   });
  // };

  return (
    <S.RegisterWrapper>
      <h1><a href='/'>손주</a></h1>
      <h2>회원가입</h2>
      <S.RegisterForm onSubmit={handleSubmit(onSubmit)} id='registerForm'>
        <S.HeadArea>
          <S.InputWrapper>
            <label>유저이름</label>
            <input
              type="text"
              name="username"
              placeholder='별명을 입력해주세요!'
              {...register('username')}
            />
          </S.InputWrapper>
        </S.HeadArea>
        <S.BodyArea>
          <S.InputWrapper>
            <label>연세</label>
            <input
              type="string"
              name="age"
              placeholder='실례지만 연세를 입력해주세요!'
              {...register('age')}
            />
            {/* {errors.age && <p>{errors.age.message}</p>} */}
            {/* {watchEmail && (
              <p className={errors.email ? 'error' : 'info'}>
                {checkEmailAvailability(watchEmail)
                  ? 'Email is available'
                  : 'Email is already taken'}
              </p>
            )} */}
          </S.InputWrapper>
        </S.BodyArea>
        <S.BodyArea>
          <S.InputWrapper>
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder='비밀번호를 입력해주세요!'
              {...register('password')}
            />
            {/* {errors.password && <p>{errors.password.message}</p>} */}
          </S.InputWrapper>
        </S.BodyArea>
        <S.TailArea>
          <S.InputWrapper>
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder='비밀번호를 확인해주세요!'
              {...register('passwordConfirm')}
            />
            {/* {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>} */}
          </S.InputWrapper>
        </S.TailArea>
      </S.RegisterForm>
      {Object.keys(errors).length > 0 && (
          <div>
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}
      <S.RegisterBtn type="submit" form='registerForm'>가입하기</S.RegisterBtn>
    </S.RegisterWrapper>
  );
}