// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// import { RiVideoUploadFill } from 'react-icons/ri';


// const ShowModal = () => {
//     const username = localStorage.getItem("username");

//     const [videoUrl, setVideoUrl] = useState("");
//     const [caption, setCaption] = useState("");
//     const [uploadStatus, setUploadStatus] = useState("");

// const uploadfile=async (type) =>{
//     const data =new FormData();
//     data.append("file", type==='video');
//     data.append("upload_preset",type==='video');

//     try{
//         let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
//         let resourceType = tepe ==='video';
//         let api = 'https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload';
//     }catch(error){
//         console.error(error)
//     }
// }


//     const handleSubmit = async () => {
//         const apiUrl = "http://localhost:5000/create-video";
//         const user_id = localStorage.getItem("user_id");

//         try {
//             const response = await axios.post(apiUrl, {
//                 user_id: user_id,
//                 videoUrl: videoUrl,
//                 caption: caption,
//             });

//             setUploadStatus("Video uploaded successfully!");
//         } catch (error) {
//             console.error("Error uploading video:", error);
//             setUploadStatus("Error uploading video");
//         }
//     };

//     return (
//         <>
//             <div className="text-center mt-8">
//                 <h3 className="text-2xl font-semibold mb-3 ">Welcome {username}</h3>

//                 <div className="flex flex-col items-center space-y-4">
                
//                 <RiVideoUploadFill className="text-blue-900 mr-2  w-12 h-12  ms-3" />
//                     <label
//                         htmlFor="v"
//                         className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
//                     >
                         
//                         Upload Video
//                     </label>
//                     <input
//                         type="file"
//                         id="v"
//                         className="hidden"
//                         onChange={(e) => setVideoUrl(e.target.value)}
//                     />

//                     <label className="text-lg font-medium">Caption:</label>
//                     <textarea
//                         className="border p-2 w-full md:w-96 h-20 resize-none"
//                         rows="3"
//                         value={caption}
//                         onChange={(e) => setCaption(e.target.value)}
//                     />

//                     <button
//                         onClick={handleSubmit}
//                         className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
//                     >
//                         Post
//                     </button>

//                     {uploadStatus && (
//                         <p className="text-green-500">{uploadStatus}</p>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ShowModal;













import React, { useState } from "react";
import axios from "axios";
import { RiVideoUploadFill } from "react-icons/ri";
import { ThreeDots } from "react-loader-spinner";

const ShowModal = () => {
  const username = localStorage.getItem("username");

  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(); 
  const [caption, setCaption] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const uploadFile = async (type) => {
   // console.log('REACT_APP_CLOUDINARY_CLOUD_NAME:', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
   console.log(video,"video");
    const data = new FormData();

    data.append("file", video);
    data.append("upload_preset", "videos_preset");
    
    
    const api = `https://api.cloudinary.com/v1_1/df2xrpvtg/video/upload`;

    try {
      const response = await axios.post(api, data);
      console.log(response)
      const { secure_url } = response.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  const handleSubmit = async (e) => {
    
   
    e.preventDefault();

    try {
      setLoading(true);
      
      const videoUrl = await uploadFile("video");
      console.log(process);

      await axios.post(`http://localhost:5000/create-video`,{ videoUrl });

      setVideo(null);
      setCaption("");

      console.log("File Upload success");
      setUploadStatus("Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video:", error);
      setUploadStatus("Error uploading video");
    } finally {
      setLoading(false);
    }
  };


    return (
        <><div>
            <div className="text-center mt-8">
                <h3 className="text-2xl font-semibold mb-3">Welcome {username}</h3>

                <div className="flex flex-col items-center space-y-4">
                    <RiVideoUploadFill className="text-blue-900 mr-2 w-12 h-12 ms-3" />
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
                        onChange={(e) => setVideoUrl(e.target.value)}
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
