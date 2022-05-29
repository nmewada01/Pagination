import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
  
      if (timer >= 50) {
        clearInterval(id);
        alert("Number is Reached to 50")
      } else {
        setTimer(timer + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, [timer]);



  return <div>
    <h1 className="red">Count Down : {timer}</h1>
    </div>;
};

export default Timer;

//  {/* <button onClick={() => setTimer((timer) => timer + 1)}>+</button>
//       <button onClick={() => setTimer((timer) => timer - 1)}>-</button> */}




   // setTimer(timer - 1)
     // setTimer((prev) => prev - 1)


//   if (timer >= 100) {
//     clearInterval(id);
//     alert("Number is Reached to 100")
//   } else {
//     setTimer((prev) => prev + 1);
//   }
// }, 100);

// return () => {
//   clearInterval(id);
// };
// }, [timer])
