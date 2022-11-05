import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { brewerContext } from "../../Contexts/BrewerContext";

const BrewerPost = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");

  const { brewer } = useContext(brewerContext);

  const date = new Date().toISOString().slice(0, 10);
  // ---- React route manual redirect to avoid link tag
  // const navigate = useNavigate();
  // const redirect = useCallback(() => navigate(`/brewer/${brewer.id}`, {replace: true}), [navigate])

  const submitPost = (e) => {
    e.preventDefault();
    return axios
      .post("/brewers/post", {
        brewer_id: brewer.id,
        caption,
        selectedImage,
        date,
      })
      .then((res) => {
        // redirect()
      });
  };
  return (
    <div className="">
      <form
        onSubmit={(e) => {
          submitPost(e);
        }}
      >
        <div className="image-upload">
          <h1 className="text-lg">Upload an Image</h1>
          {selectedImage && (
            <div>
              <img
                alt="not fount"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button
                className="upload-button"
                onClick={() => setSelectedImage(null)}
              >
                Remove
              </button>
            </div>
          )}
          <br />

          <input
            className="bg-[#f6f2f2d9]"
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <input
            type="text"
            name="caption"
            onChange={(e) => setCaption(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default BrewerPost;
