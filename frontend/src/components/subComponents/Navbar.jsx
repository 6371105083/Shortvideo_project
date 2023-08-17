import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import MyModal from "../Modal/MyModal";
const NavBar = () => {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token'); // Get token from localStorage

    return (
        <>
            <nav className="bg-gray-800 text-white p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-semibold">Hyscaler Reel</h1>
                    </div>
                    <div className="space-x-4 ">
                        <Link to="/" className="hover:text-white no-underline">
                            Home
                        </Link>

                        {!token && (
                            <>
                                <Link to="/register" className="hover:text-white no-underline">
                                    Register
                                </Link>
                                <Link to="/login" className="hover:text-white no-underline">
                                    Login
                                </Link>
                            </>
                        )}

                        {token && (
                            <>
                              <MyModal/>
                               
                                <Link to="/profile" className="hover:text-white no-underline">
                                    {username}
                                </Link>
                                <Link onClick={()=>{
                                    localStorage.clear() 
                                    alert("Are You want to logout !");
                                    toast.warning("Logout Successfully");   
                                }}to="/register" className="hover:text-white no-underline">
                                    Logout
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;




// import MyModal from "../Modal/MyModal";

// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { toast } from 'react-toastify';
// import axios from "axios"; // Import axios

// const NavBar = () => {
//     const username = localStorage.getItem('username');
//     const token = localStorage.getItem('token'); // Get token from localStorage

//     const [modalOpen, setModalOpen] = useState(false);
//     const [videoUrl, setVideoUrl] = useState("");
//     const [caption, setCaption] = useState("");
//     const [uploadStatus, setUploadStatus] = useState(""); // Add uploadStatus state

//     const handleModalOpen = () => {
//         setModalOpen(true);
//     }

//     const handleModalClose = () => {
//         setModalOpen(false);
//     }

//     const handleSubmit = async () => { // Add async keyword
//         const apiUrl = "http://localhost:5000/create-video";
//         const user_id = localStorage.getItem("user_id");
        
//         try {
//             const response = await axios.post(apiUrl, {
//                 user_id: user_id,
//                 videoUrl: videoUrl,
//                 caption: caption,
//             });

//             if (response.status === 201) {
//                 setUploadStatus("Video uploaded successfully!");
//                 toast.success("Video uploaded successfully");
//             } else {
//                 console.error("Error uploading video:", response.data);
//                 setUploadStatus("Error uploading video");
//                 toast.error("Error uploading video");
//             }
//         } catch (error) {
//             console.error("Error uploading video:", error);
//             setUploadStatus("Error uploading video");
//             toast.error("Error uploading video");
//         }

//         setModalOpen(false);
//     };

//     return (
//         <>
//             <nav className="bg-gray-800 text-white p-4">
//                 <div className="flex justify-between items-center">
//                     <div>
//                         <h1 className="text-2xl font-semibold">Hyscaler Reel</h1>
//                     </div>
//                     <div className="space-x-4 ">
//                         <Link to="/" className="hover:text-white no-underline">
//                             Home
//                         </Link>

//                         {!token && (
//                             <>
//                                 <Link to="/register" className="hover:text-white no-underline">
//                                     Register
//                                 </Link>
//                                 <Link to="/login" className="hover:text-white no-underline">
//                                     Login
//                                 </Link>
//                             </>
//                         )}

//                         {token && (
//                             <>
//                                <MyModal/>

//                                 <Link to="/profile" className="hover:text-white no-underline">
//                                     {username}
//                                 </Link>
//                                 <Link onClick={()=>{
//                                     localStorage.clear();
//                                     alert("Are You want to logout !");
//                                     toast.warning("Logout Successfully");   
//                                 }} to="/register" className="hover:text-white no-underline">
//                                     Logout
//                                 </Link>
                               
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </nav>

//             {/* Video Upload Modal */}
//             {modalOpen && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <span className="modal-close" onClick={handleModalClose}>
//                             &times;
//                         </span>
//                         <h2>Upload Video</h2>
//                         <input
//                             type="file"
//                             value={videoUrl}
//                             onChange={(e) => setVideoUrl(e.target.value)}
//                         />
//                         <textarea
//                             rows="3"
//                             cols="40"
//                             value={caption}
//                             onChange={(e) => setCaption(e.target.value)}
//                         />
//                         <button onClick={handleSubmit} className="btn btn-success">
//                             Post
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default NavBar;







