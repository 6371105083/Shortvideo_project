import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LiaCommentsSolid } from 'react-icons/lia';

export default function CommentsModal() {
  // Dummy comments data for demonstration
  const comments = [
    { id: 1, text: 'This is a comment.' },
    { id: 2, text: 'Another comment here.' },
    // ... add more comments
  ];

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
                  <div className="p-7 ">
                    <h2 className="text-xl font-semibold mb-4">Comments</h2>
                    <ul className="space-y-2">
                      {comments.map(comment => (
                        <li key={comment.id} className="text-gray-700 ">
                          {comment.text}
                        </li>
                      ))}
                    </ul>
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
