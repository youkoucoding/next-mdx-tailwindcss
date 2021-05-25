import Link from 'next/link';

const AppPreview = ({ app }) => {
  return (
    <div className='flex flex-col bg-white rounded-lg shadow-lg'>
      {/* app card top */}
      <Link href='/'>
        <a className='group relative py-4 px-2 bg-purple-500 hover:bg-purple-400 text-white rounded-t-lg flex items-center justify-center text-2xl font-bold'>
          {/* absolutely items */}
          <div className='block absolute -bottom-2 inset-x-0 h-6 bg-purple-800 group-hover:bg-purple-700 transform -skew-y-2'></div>
          <div className='block absolute -bottom-2 inset-x-0 h-6 bg-purple-700 group-hover:bg-purple-600 transform -skew-y-3'></div>
          <div className='block absolute -bottom-2 inset-x-0 h-6 bg-purple-600 group-hover:bg-purple-500 transform -skew-y-1'></div>
          <div className='block absolute -bottom-2 inset-x-0 h-6 bg-purple-500 group-hover:bg-purple-400 transform -skew-y-0'></div>
          <div className='block absolute -bottom-2 inset-x-0 h-6 bg-purple-600 group-hover:bg-purple-500 transform skew-y-1'></div>
          <div className='block absolute -bottom-2 inset-x-0 h-6 bg-purple-700 group-hover:bg-purple-600 transform skew-y-2'></div>
          <div className='block absolute -bottom-2 inset-x-0 h-6 bg-purple-800 group-hover:bg-purple-700 transform skew-y-3'></div>
          <h3 className='transform translate-y-2 group-hover:translate-y-0 transtion duration-300'>
            {app.data.title}
          </h3>
        </a>
      </Link>

      {/* contents */}
      <div className='flex flex-col items-between h-full p-8 pt-10 space-y-4'>
        <p className='flex-grow'>{app.data.description}</p>
        <a className='block'>Learn More</a>
      </div>
    </div>
  );
};

export default AppPreview;
