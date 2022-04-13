import Axios from 'axios';
import React, { memo, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const Singleuser = () => {
  const params = useParams();
  const [userObj, setUserObj] = useState({});

  const navigate = useNavigate();

  // console.log(params.userid);
  useEffect(() => {
    Axios.get('https://reqres.in/api/users/' + params.userid).then(res => {
      // console.log(res.data);
      setUserObj(res.data.data)
    }).catch(error => console.log(error));

  }, []);

  // console.log("userObj", userObj);

  const navigateToNewpage = () => {
    navigate('/home')
  }

  return (
    <>
      <div>User id is: {params.userid}</div>
      {Object.values(userObj).length > 0 ?
        <div className="box" style={{ width: 400 }}>
          <h1 className="name">{userObj.first_name + " " + userObj.last_name}</h1>
          <img src={userObj.avatar} alt="nop imagessadfs" />
          <button onClick={navigateToNewpage} >Go to UserList</button>
        </div> : null}
    </>
  )


}

export default memo(Singleuser)