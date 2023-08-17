import React from "react";
import NavBar from "./subComponents/Navbar";
import axios from "axios";
import { useState } from "react";

const Profile = () => {
    // const username = localStorage.getItem("username");
    
    //     const [videoUrl, setVideoUrl] = useState("");
    //     const [caption, setCaption] = useState("");
    //     const [uploadStatus, setUploadStatus] = useState("");
       
    //         const handleSubmit = async () => {
    //                 const apiUrl = "http://localhost:5000/create-video";
    //                 const user_id = localStorage.getItem("user_id");
            
    //                 try {
    //                     const response = await axios.post(apiUrl, {
    //                         user_id: user_id,
    //                         videoUrl: videoUrl,
    //                         caption: caption,
    //                     });
            
    //                     setUploadStatus("Video uploaded successfully!");
    //                 } catch (error) {
    //                     console.error("Error uploading video:", error);
    //                     setUploadStatus("Error uploading video");
    //                 }
    //             };
            
    return (
        <>
            <NavBar /> 
            {/* <h1 className="text-center mt-5">Welcome {username}</h1>

            <div className="text-center mt-4">
                <label  className="btn btn-primary me-2" htmlFor="v"> Upload Video</label>
                <input type="file"  value={videoUrl} 
                     onChange={(e) => setVideoUrl(e.target.value)} id="v" className=""
                 />
                   <div>
                   <label className="block mb-2 mt-5">Caption:</label>
                        <textarea
                            className="border p-2 "
                            rows="3"
                            cols="40"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />
             </div>  
               
               
                <button onClick={handleSubmit} className="btn btn-success">Post</button>

                {uploadStatus && (
                    <p className="text-center text-green-500">{uploadStatus}</p>
                )}
            </div> */}
        </>
    );
};

export default Profile;

