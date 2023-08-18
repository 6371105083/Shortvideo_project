
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './subComponents/Navbar';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState({});
  //Comments
  const [comments,setComments]=useState({})

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get('http://localhost:5000/postedVideo');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }

    async function fetchLikes() {
      try {
        const response = await axios.get('http://localhost:5000/reel-likes');
        const likesData = response.data.reduce((acc, like) => {
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
        await axios.delete(`http://localhost:5000/reel-likes/${likes[reel_id]._id}`);
      } else {
        // If the video is not liked, like it
        await axios.post('http://localhost:5000/reel-likes', {
          reel_id,
          user_id,
        });
      }

      // Update the state of likes after the like/dislike action
      setLikes((prevLikes) => ({
        ...prevLikes,
        [reel_id]: liked ? undefined : { reel_id, user_id },
      }));
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  


//ForComments


  }

  return (
    <>
      <NavBar />
      <h1 className="space-x-4 text-rose-800 mt-3 text-center">Welcome to Hyscaler</h1>
      <div className="font-semibold">
        <ul className="flex flex-wrap justify-normal ms-20">
          {videos.map((video) => (
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
                    onClick={() => toggleLike(video.user_id)}
                    className={`text-xl cursor-pointer ${likes[video.user_id] ? 'text-red-500' : 'text-gray-500'}`}
                  >
                    ❤️ {likes[video.user_id] ? 'Liked' : 'Like'}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
