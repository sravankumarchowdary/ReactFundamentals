import React, { memo } from 'react'
import { useParams } from 'react-router-dom';

const Singleuser = () => {
    const params = useParams();
    console.log(params.userid);
  return (
    <div>User id is: {params.userid}</div>
  )
}

export default memo(Singleuser)