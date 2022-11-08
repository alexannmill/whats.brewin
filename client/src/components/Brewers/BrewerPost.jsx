// import axios from "axios";
import { useCallback, useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { brewerContext } from "../../Contexts/BrewerContext";

const BrewerPost = () => {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [caption, setCaption] = useState("");

  // const { brewer } = useContext(brewerContext);

  // ---- ----- Will implement backend functionality after demo day
  // ---- React route manual redirect to avoid link tag
  const navigate = useNavigate();
  const redirect = useCallback(
    () => navigate(`/brewer/home`, { replace: true }),
    [navigate]
  );

  // ---- Cannot figure out how to use axios for form with
  // ---- image ATM will need to comeback and config
  // const submitPost = (e) => {
  //   e.preventDefault();
  //   console.log('image:', image)
  //   return axios
  //     .post("/posts/new", {
  //       user_id: 3,
  //       caption,
  //       image,
  //     })
  //     .then((res) => {
  //       console.log('res:', res)
  //       // redirect()
  //     });
  // };

  const handleFileChange = (e) => {
    console.log("e.target.files:", e.target.files);
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <div className="create_events-form">
      <form
        action="/posts/new"
        method="post"
        encType="multipart/form-data"
        // onSubmit={(e) => {
        //   submitPost(e);
        // }}
      >
        <div>
          <h1>Create a Post</h1>
        </div>
        <br />
        {image.preview && (
          <img src={image.preview} alt="upload" width="100" height="100" />
        )}
        <input
          name="image"
          type="file"
          onChange={(e) => handleFileChange(e)}
        ></input>
        <div className="caption-input">
          <label className="post-caption">Caption: </label>
          <input
            className="caption-input"
            type="text"
            name="caption"
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            className="bg-gradient-to-r from-[#FF8001] to-[#feb47b] 
            hover:bg-gradient-to-r hover:from-[#feb47b]  hover:to-[#FF8001] 
  text-neutral-100 text-2xl rounded-lg pl-3 pr-3 mt-2  font-semibold"
            type="submit"
            onClick={(e) => {
              setCaption("");
              setImage({ preview: "", data: "" });
              redirect();
            }}
          >
            send it
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrewerPost;
