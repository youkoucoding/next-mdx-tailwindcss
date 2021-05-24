import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Hero from '../components/Hero';

export default function Home({ posts }) {

  return (
    <>
      <div className='max-w-7xl mx-auto px-8 py-20 text-6xl'>
        <Hero />
      </div>
      {/* show samples in grid */}
      <div className='bg-gray-100 py-20'>
        <div className='max-w-7xl mx-auto px-8 space-y-8'>
          <h2 className='text-4xl font-bold'>Sample project</h2>

          <div className='grid grid-cols-3'>

            {posts.map((post, index) => (
              <div key={index}>
                {post.data.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export function getStaticProps() {

  const postsPath = path.join(process.cwd(), 'posts');

  // return array 
  const postsFilePaths = fs.readdirSync(postsPath).filter(path => /\.mdx?$/.test(path));

  const posts = postsFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(postsPath, filePath));
    const { content, data } = matter(source);
    return { content, data, filePath };
  });

  return { props: { posts } };
};