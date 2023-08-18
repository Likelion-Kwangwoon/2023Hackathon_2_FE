import React from 'react';
import { useState, useEffect } from 'react';
import * as S from './style';
import { useTheme } from 'styled-components';
import { getAllLecture } from '../../api/api';
import { Link } from 'react-router-dom'
export default function SearchedList({ keyword, category }) {
  const [list, setList] = useState({});
  const [error, setError] = useState('');
  const theme = useTheme()
  useEffect(() => {
    const getAll = async() => {
      const result = await getAllLecture();
      if (typeof(result) === "string") setError("error")
      else setList(result.result);
    }
    getAll();
  }, []);

  const dotGenerator = (category) => {
    let color
    switch (category) {
      case "banking":
        color = theme.action.green
        break
      case "kiosk" :
        color = theme.action.blue
        break
      case "shopping" :
        color = theme.action.red
        break
      case "smartphone" :
        color = theme.action.yellow
        break  
      case "subway" :
        color = theme.action.violet
        break
      case "Ecommerce" :
        color = theme.action.pink
        break
      default :
        color = theme.action.black
      break
    }
    const dot = {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: color,
    }
    return (
      <div style={dot}></div>
    )
  }

  return(
    <S.ListWrapper>
      <S.GridWrapper>
        {Object.values(list).map(item => (
          <S.LectureContent key={item.id}>
            <Link to={`/lecture/${item.id}`}>
              <img src={item.image} alt='썸네일'/>
              {dotGenerator}
              <p>{item.title}</p>
            </ Link>
          </S.LectureContent>
        ))}
      </S.GridWrapper>
    </S.ListWrapper>
    
  );
}