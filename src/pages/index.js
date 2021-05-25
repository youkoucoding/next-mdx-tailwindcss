import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Hero from '../components/Hero';
import AppPreview from '../components/AppPreview';

export default function Home({ apps }) {
  console.log(apps);

  return (
    <>
      <div className='max-w-7xl mx-auto px-8 py-20 text-6xl'>
        <Hero />
      </div>
      {/* show samples in grid */}
      <div className='bg-gray-100 py-20'>
        <div className='max-w-7xl mx-auto px-8 space-y-8'>
          <h2 className='text-4xl font-bold'>Sample project</h2>

          <div className='grid grid-cols-3 gap-5'>

            {apps.map((app, index) => (
              <AppPreview key={index} app={app} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export function getStaticProps() {

  const appsPath = path.join(process.cwd(), 'apps');

  // return array 
  const appsFilePaths = fs.readdirSync(appsPath).filter(path => /\.mdx?$/.test(path));

  const apps = appsFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(appsPath, filePath));
    const { content, data } = matter(source);
    return { content, data, filePath };
  });

  return { props: { apps } };
};