import React, { useState, useEffect } from 'react'

export default function Home({ data }) {
  const [state, setstate] = useState();

  const getNames = (i) => {
    const userName = data[i].name;
    setstate(userName)
    return userName;
  }
useEffect(() => {
  setInterval(()=>{
    const index = parseInt(Math.random()*10);
    getNames(index);
  }, 5000);
}, [])

  return (
    <div className="box1">
      <p>{state}</p>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`http://192.168.0.10:3000/api/users`)
  const data = await res.json();
  return {
    props: { data },
  }
}

