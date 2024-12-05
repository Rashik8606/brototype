import React from 'react';




function EmployeeDetail({ name, age, place }) {
  return (
      <div>
          <h2>{name}</h2>
          <p>Age: {age}</p>
          <p>Place: {place}</p>
      </div>
  );
}
export {EmployeeDetail}

function Employee() {
  let emp = [{name:'Elon Musk',age:33, place:'USA'},
    {name:'Steve Jobs',age:50, place : 'UK'},
    {name:'Modi',age:30 , place : 'india'},
    {name:'Buddy',age:40, place:'USA'}
  ] 
  return (
    <div>
      {
        emp.map((obj, index) => {
          return(
            <EmployeeDetail key={index} {...obj}  />
          )
        })
      }
    </div>
  )
}

export {Employee};



