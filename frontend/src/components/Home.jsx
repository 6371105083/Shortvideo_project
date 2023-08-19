
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './subComponents/Navbar';


import CommentsModal from './Modal/CommentsModal.jsx';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState({});
  //Comments
  const [comments, setComments] = useState({})

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get('http://localhost:5000/postedVideo');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
    //comments


    async function fetchComments() {
      try {

      } catch (error) {

      }
    }







    //Likes
    async function fetchLikes() {
      try {
        const response = await axios.get('http://localhost:5000/reel-likes');
        const likesData = response.data.reduce((acc, like) => {
          console.log('res' + response.data)
          acc[like.reel_id] = like;
          return acc;
        }, {});


        setLikes(likesData);
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    }

    fetchVideos();
    fetchLikes();
  }, []);


  async function toggleLike(reel_id) {

    const liked = !!likes[reel_id]; // Check if the video is already liked
    const user_id = "your_user_id"; // Replace with the actual user ID

    try {
      if (liked) {

        // If the video is already liked, dislike it
        await axios.post('http://localhost:5000/toggle-reel-like', {
          reel_id,
          user_id,
        });
      } else {
        // If the video is not liked, like it
        await axios.post('http://localhost:5000/toggle-reel-like', {
          reel_id,
          user_id,
        });
      }

      // Update the state of likes after the like/dislike action
      setLikes((prevLikes) => ({
        ...prevLikes,
        [reel_id]: !liked, // Toggle the like status
      }));
    } catch (error) {
      console.error('Error toggling like:', error);
    }




  }

  return (
    <>
      <NavBar />

      <div className="bg-gradient-to-r from-blue-500 to-purple-500  w-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Hyscaler</h1>

        <p className="text-lg">Discover amazing content and connect with others.</p>
        <div className="font-semibold">
          <ul className="flex flex-wrap justify-normal ms-20">
            {videos.map((video) =>

              <li key={video._id} className="m-2 text-left  mb-5">

                <div className="relative ">
                  <div className="p-2 absolute  left-0 w-full text-left overflow-hidden whitespace-nowrap">
                    {video.caption}
                  </div>

                  <video controls width="250" className="pt-5">
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="flex justify-start items-center">
                    <button
                      onClick={() => toggleLike(video._id)}

                      className={`text-xl cursor-pointer transition-colors ${likes[video._id] ? 'text-red-500' : 'text-black'}`}
                    >

                      {likes[video._id] ? '❤️ Liked' : '🤍 Like'}
                    </button>
                    <span className="inline-block align-text-bottom text-black">
                     <span className="inline-block align-text-bottom text-black">
                    <CommentsModal  />
                  </span>
                    </span>


                  </div>



                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
