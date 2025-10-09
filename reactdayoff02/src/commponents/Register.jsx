import { useState } from "react";
// 간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개 
const Register = () => {

  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeBirth = (e) => { 
    setBirth(e.target.value);
  }
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  }
  const onChangeBio = (e) => {
    setBio(e.target.value);
  }

  return(
    
    <div>
      <div><input
        value={name}
        onChange={onChangeName}
        type="text"
        placeholder={"이름"} />
        {name}
      </div>
    
      <div><input type="date"
                  value={birth}
                  onChange={onChangeBirth} />
       {birth}
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option></option>
          <option value="ko">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
          <option value="ca">캐나다</option>
          <option value="jap">일본</option>
        </select>
        {country}
      </div>
      <div>
        <textarea value={bio}  onChange={onChangeBio}/>
        {bio}
      </div>
    </div>
  );  
};


export default Register;