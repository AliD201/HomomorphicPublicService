import React from 'react';
import Card from './Card'

const CardList = (props) => {
  //Error trigger
  // throw new Error('NOOOOO!')
  console.log(props);
  // const robots = props.robots;
  // const cardComponent = robots.map((user ,i) =>{
  //   // return (<Card key={i} id ={user.id} name={user.name} email={user.email}/>)
  //   return (<Card key={i} id ={user.id} name={user.name} email={user.email}/>)
  // })


  return (
    <div>
    {props.files}
    </div>
  )
  // return (
  //   <div>
  //   <Card/>
  //   </div>
  // )

}

export default CardList
