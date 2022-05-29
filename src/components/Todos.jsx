import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Todos = () => {
  const [pages, setPages] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalCount, setTotalCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // const getTodo = async () =>{
  //   let r = await axios.get("")

  useEffect(() => {
    axios
      .get(` http://localhost:4000/todos?_page=${pages}&_limit=${limit}`)
      .then((r) => {
        console.log(r);
        setTodos(r.data);
        setTotalCount(Number(r.headers["x-total-count"]));
      });
    // getTodo();
  }, [pages, limit]);

  return (
    <div>
      Todos
      <button
        disabled={pages <= 1}
        onClick={() => {
          if (pages > 1) {
            setPages(pages - 1);
          }
        }}
      >{` < `}</button>
      {/* <select onChange={(e) => setLimit(e.target.value)}>
        <option value={5} >5</option>
        <option value={10} >10</option>
        <option value={15}>15</option>
       
      </select> */}
      <input
        type="number"
        text={limit}
        min={0}
        max={totalCount}
        onChange={({ target }) => setLimit(Number(target.value))}
      />
      <button
        disabled={totalCount < pages * 5}
        onClick={() => setPages(pages + 1)}
      >{` > `}</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} {` : `} {todo.text}
        </div>
      ))}
    </div>
  );
};

export default Todos;
