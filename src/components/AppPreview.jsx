import React from 'react';

const AppPreview = ({ app }) => {
  return (
    <div className='flex flex-col bg-white rounded-lg'>
      {/* app card top */}
      <div className='relative py-5 px-2 bg-purple-500 text-white rounded-t-lg flex items-center justify-center text-2xl font-bold'>
        {/* absolutely items */}
        <div className='absolute -bottom-2 inset-x-0 h-6 bg-purple-800 transform -skew-y-2'></div>
        <div className='absolute -bottom-2 inset-x-0 h-6 bg-purple-700 transform -skew-y-3'></div>
        <div className='absolute -bottom-2 inset-x-0 h-6 bg-purple-600 transform -skew-y-1'></div>
        <div className='absolute -bottom-2 inset-x-0 h-6 bg-purple-500 transform -skew-y-0'></div>
        <div className='absolute -bottom-2 inset-x-0 h-6 bg-purple-600 transform skew-y-1'></div>
        <div className='absolute -bottom-2 inset-x-0 h-6 bg-purple-700 transform skew-y-2'></div>
        <div className='absolute -bottom-2 inset-x-0 h-6 bg-purple-800 transform skew-y-3'></div>
        <h3>{app.data.title}</h3>
      </div>

      {/* contents */}
      <div className='flex flex-col items-between h-full p-8 pt-10 space-y-4'>
        <p className='flex-grow'>{app.data.description}</p>
        <a className='block'>Learn More</a>
      </div>
    </div>
  );
};

export default AppPreview;
