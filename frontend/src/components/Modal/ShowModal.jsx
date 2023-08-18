import React from "react";
import axios from "axios";
import { useState } from "react";
import { RiVideoUploadFill } from 'react-icons/ri';
 import { ThreeDots } from "react-loader-spinner";


const ShowModal = () => {
  const username = localStorage.getItem("username");
  const user_id = localStorage.getItem("user_id");

  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState("");
  const [caption, setCaption] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", video);
    data.append("upload_preset", "videos_preset");
    console.log(video);


    let cloudName = "df2xrpvtg";

    try {
      let resourceType = "video";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      // Send the video file to Cloudinary
      const response = await axios.post(api, data);
      const { secure_url } = response.data;

      return secure_url;
    } catch (error) {
      console.error(error);
    }
  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      setLoading(true);
      if (!video) {
        throw new Error("No video selected");
      }

      const videoUrl = await uploadFile("video");



      await axios.post(`http://localhost:5000/create-video`, { videoUrl, user_id , caption});

      setVideo(null);
      

      console.log("File Upload success");
      setUploadStatus("Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video:", error);
      console.log("Error response:", error.response); // Log the full error response
      setUploadStatus("Error uploading video");
    } finally {
      setLoading(false);
    }

  };



  return (
    <>
      <div>
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold mb-3 ">Welcome {username}</h3>

          <div className="flex flex-col items-center space-y-4">

            <RiVideoUploadFill className="text-blue-900 mr-2  w-12 h-12  ms-3" />
            <label
              htmlFor="v"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
            >

              Upload Video
            </label>
            <input
              type="file"
              id="v"
              className="hidden"
              onChange={(e) => setVideo(e.target.files[0])}

            />

            <label className="text-lg font-medium">Caption:</label>
            <textarea
              className="border p-2 w-full md:w-96 h-20 resize-none"
              rows="3"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Post
            </button>

            {uploadStatus && (
              <p className="text-green-500">{uploadStatus}</p>
            )}
          </div>
        </div>
        {
          loading && <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        }
      </div>
    </>
  );
};

export default ShowModal;













// import React, { useState } from "react";
// import axios from "axios";
// import { RiVideoUploadFill } from "react-icons/ri";
// import { ThreeDots } from "react-loader-spinner";

// const ShowModal = () => {
//   const username = localStorage.getItem("username");

//   const [loading, setLoading] = useState(false);
//   const [videoUrl, setVideoUrl] = useState();
//   const [caption, setCaption] = useState("");
//   const [uploadStatus, setUploadStatus] = useState("");

//   const uploadFile = async (type) => {
//     const data = new FormData();
//     data.append("file", videoUrl[0]);
//     data.append("upload_preset", type === 'video' ? "videos_preset" : "");

//     const resourceType = 'video';

//     let api = `https://api.cloudinary.com/v1_1/df2xrpvtg/${resourceType}/upload`;

//     const res = await axios.post(api, data);
//     console.log(res)
//     const { secure_url } = res.data;
//     console.log(secure_url);
//     return secure_url;

//   };



//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {
//       setLoading(true);
//       if (!videoUrl) {
//         throw new Error("No video selected");
//       }

//       const uploadvideoUrl = await uploadFile("video");


//       //  await axios.post(`http://localhost:5000/create-video`,{ uploadvideoUrl });

//       setVideo(null);
//       setCaption("");

//       console.log("File Upload success");
//       setUploadStatus("Video uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading video:", error);
//       console.log("Error response:", error.response); // Log the full error response
//       setUploadStatus("Error uploading video");
//     } finally {
//       setLoading(false);
//     }

//   };


//   return (
//     <><div>
//       <div className="text-center mt-8">
//         <h3 className="text-2xl font-semibold mb-3">Welcome {username}</h3>

//         <div className="flex flex-col items-center space-y-4">
//           <RiVideoUploadFill className="text-blue-900 mr-2 w-12 h-12 ms-3" />
//           <label
//             htmlFor="v"
//             className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
//           >
//             Upload Video
//           </label>
//           <input

//             type="file"
//             id="v"
//             className="hidden"
//             onChange={(e) => setVideoUrl(e.target.files[0])}
//           />

//           <label className="text-lg font-medium">Caption:</label>
//           <textarea
//             className="border p-2 w-full md:w-96 h-20 resize-none"
//             rows="3"
//             value={caption}
//             onChange={(e) => setCaption(e.target.value)}
//           />

//           <button
//             onClick={handleSubmit}
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
//           >
//             Post
//           </button>

//           {uploadStatus && (
//             <p className="text-green-500">{uploadStatus}</p>
//           )}
//         </div>
//       </div>

//       {
//         loading && <ThreeDots
//           height="80"
//           width="80"
//           radius="9"
//           color="#4fa94d"
//           ariaLabel="three-dots-loading"
//           wrapperStyle={{}}
//           wrapperClassName=""
//           visible={true}
//         />
//       }

//     </div>
//     </>
//   );
// };

// export default ShowModal;
