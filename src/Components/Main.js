import React from "react";
import { setInputTitle, createBlog, setReset } from "../Redux/Action/index";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import '../App.css'
function Main() {
  const Dispatch = useDispatch();
  const title = useSelector(state => state.title);
  const blog = useSelector(state => state.blog);
  let State = useSelector(state => state);
  const [x, y] = useState([State]);

  function addTitle() {
    if (!title) {

    }
    else {
      y([...x, State]);
      Dispatch(setReset());
      console.log({ State })
    }
  }

  return (<>

    <div className="Mainn">
    
      <center id="create" >
        
        <h1 >Cᵣₑₐₜₑ Yₒᵤᵣ BₗₒG</h1>
        <input type="text"  id=
        "csss"required placeholder="Enter Blog Title"
          value={title}
          onChange={(e) =>
            Dispatch(setInputTitle(e.target.value))}
        /> <br /><br />
        <textarea type="text" id="css" required placeholder="Description about Blog"
          value={blog}
          onChange={(e) =>
            Dispatch(createBlog(e.target.value))}
        /> <br />
        <input type="image" src="img_submit.gif" alt="choose image" width="48" height="48" />
        <button id="btn" onClick={addTitle}>Add</button>
      </center>
      {x.map((e, i) => {
        return (
          <div className="Main">

            <h1>{e.title}</h1>
            <p>
              {e.blog}

              <button>View</button> <br />
              <button>Edit</button>
            </p>
          </div>
        )
      })}





    </div>

  </>
  );
}

export default Main;
