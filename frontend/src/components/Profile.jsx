import React from "react";
import NavBar from "./subComponents/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

const Profile = () => {
    const username = localStorage.getItem("username");
    const user_id = localStorage.getItem("user_id");

    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");
    const [loading, setLoading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState("");
    const [user, setUser] = useState({});
    const [display, setDisplay] = useState({});
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get(`http://localhost:5000/images`);
                const result = response.data[0]._id;
                const photo = response.data[0].imageUrl;
                setUser(result);
                setDisplay(photo);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        fetchUserData();
    }, []);

    const uploadFile = async (type) => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "images_preset");
        let cloudName = "df2xrpvtg";
        try {
            let resourceType = "image";
            let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
            const response = await axios.post(api, data);
            const { secure_url } = response.data;
            setUploadedImageUrl(secure_url);
            return secure_url;
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/images/${user}`, {
                imageUrl: uploadedImageUrl,
                bio
            });
            setDisplay(uploadedImageUrl);
            console.log("Image updated successfully!");
        } catch (error) {
            console.error("Error updating image:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/images/${user}`);
            console.log("Image deleted successfully!");
            setDisplay(""); // Clear the display image
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (!image) {
                throw new Error("No image selected");
            }
            const imageUrl = await uploadFile("image");
            await axios.post(`http://localhost:5000/images`, {
                imageUrl,
                user_id,
                bio
            });
            setImage(null);
            setBio("");
            console.log("File Upload success");
            setUploadStatus("Image uploaded successfully!");
        } catch (error) {
            console.error("Error uploading image:", error);
            console.log("Error response:", error.response);
            setUploadStatus("Error uploading image");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <NavBar />
            <div className="flex justify-center mt-8">
                <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                    <div className="flex items-center justify-center mb-4">
                        <img
                            src={display || "/default-profile-image.jpg"}
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <input
                            type="button"
                            value="Update"
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md cursor-pointer"
                            onClick={handleUpdate}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="mb-2"
                        />
                        <input
                            type="button"
                            value="Delete"
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md cursor-pointer"
                            onClick={handleDelete}
                        />
                    </div>

                    <textarea
                        placeholder="Bio..."
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="border p-2 w-full h-20 resize-none mb-2"
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                    >
                        Upload Profile
                    </button>
                    {uploadStatus && <p className="text-green-500">{uploadStatus}</p>}
                </div>
            </div>
        </>
    );
};

export default Profile;
