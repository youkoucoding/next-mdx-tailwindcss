import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Hero from '../components/Hero';

export default function Home({ posts }) {

  console.log(posts);

  return (
    <>
      <Hero />

      {/* show samples in grid */}

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