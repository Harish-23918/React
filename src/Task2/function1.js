import React from 'react'

function Users(){
    // const data = [
    //   { id: 1, name: "harish" },
    //   { id: 2, name: "Victor" },
    //   { id: 3, name: "bharath" },
    // ];
   const name= ["Harish", "bharath", "Zak", "peter", "hulk", "sai"];
  
    return (
      <div>
        {name.map((user) => (
          <h1>{user}</h1>
        ))}
        hello..
      </div>
    );
  };

  export default Users;


