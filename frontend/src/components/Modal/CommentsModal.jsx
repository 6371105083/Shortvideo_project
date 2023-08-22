import React, { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LiaCommentsSolid } from 'react-icons/lia';
import axios from 'axios';


export default function CommentsModal() {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [reelId,setReelId]=useState('');
  const user_id = localStorage.getItem("user_id");
 
  useEffect(() => {
 
    fetchComments()
    comments2()
  }, []);
  async function fetchComments() {
    try {
      const response = await axios.get('http://localhost:5000/reel-comments')
      const { data: { reelComments } } = response;
   
    
      setReelId(reelComments[0].reel_id)
    

    } catch (error) {
      console.error('Error Fetching  comments:', error);
    }
  }
 
 
async function comments2(reelId){
  console.log(reelId,"sdrfthj") 
  try {
    
    const result = await axios.get(`http://localhost:5000/comments/${reelId}`)
    const { data: { reelComments } } = result;
    setComments(reelComments);
  } catch (error) {
    console.error('Error Fetching  comments:', error.message);
  }
}


  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:5000/reel-comments/${commentId}`);
      setComments(comments.filter(comment => comment._id !== commentId));
    } catch (error) {
      console.error('Error Deleting comment:', error);
    }
  };

  const createComment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/reel-comments', {
        text: newCommentText,
        user_id,
        reel_id: reelId  
      });
  
      setComments([...comments, response.data]);
      setNewCommentText('');
      await comments2();
    } catch (error) {
      console.error('Error Creating comment:', error.message);
    }
  };


  return (
    <div className="bottom-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-190'}
                group inline-flex items-center rounded-md p-0 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-0 `}
            >
              <span>
                <LiaCommentsSolid className="h-6 w-6 m-1" />
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="p-7">
                    <h2 className="text-xl font-semibold mb-4">Comments</h2>

                    <ul className="space-y-2">
                      {comments.map((comment, index) => (
                        <li key={index}>{comment.text}
                          <button
                            onClick={() => deleteComment(comment._id)}
                            className="ml-2 text-red-500"
                          >
                            Delete
                          </button>


                        </li>
                      ))}
                    </ul>

                    <textarea
                      className="w-full h-16 p-2 mt-4 border border-gray-300 rounded"
                      placeholder="Write a comment..."
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                    ></textarea>
                    <button
                      onClick={createComment}
                      className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
