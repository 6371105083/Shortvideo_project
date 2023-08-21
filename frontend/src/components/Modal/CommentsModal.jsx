import React, { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LiaCommentsSolid } from 'react-icons/lia';
import axios from 'axios';

export default function CommentsModal() {
  const [comments, setComments] = useState([]);
 
  const createComment = async (newCommentText) => {
    try {
     
      const headers = {
        method:"POST",
        'Content-Type': 'application/json',
      };

      const requestData = {
        text: newCommentText,
      };

      const response = await axios.post('http://localhost:5000/reel-comments', requestData, {
        headers: headers,
      });
   console.log(response,"uighygbyu")
      const newComment = response.data.reelComment;
      setComments([...comments, newComment]);
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };
  useEffect(()=>{
    createComment()
  },[])

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get('http://localhost:5000/reel-comments');
        setComments(response.data); // Assuming response.data contains an array of comments
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
  
    fetchComments();
  }, []);

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
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
                      {comments.map(comment => (
                        <li key={comment.id} className="text-gray-700">
                          {comment.text}
                          <button
                            onClick={() => deleteComment(comment.id)}
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
                    ></textarea>
                    <button
                      onClick={() => {
                        // Logic to create the comment
                        const newCommentText = ""; // Get the new comment text from the textarea
                        createComment(newCommentText);
                      }}
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
