import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const App = ({ app }) => {

  return (
    <div>Apps goes here.</div>
  );
};

export default App;

// step 1. many pages have to generate
export async function getStaticPaths() {
  // get all the markdown files
  const appsPath = path.join(process.cwd(), 'apps');
  const appsFilePaths = fs.readdirSync(appsPath).filter(path => /\mdx?$/.test(path));

  const paths = appsFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));


  // pass it into a params variable
  return {
    paths,
    fallback: false
  };

}

// step 2. for each individual page, get this  data
export async function getStaticProps({ params }) {
  const appsPath = path.join(process.cwd(), 'apps');
  const appFilePath = path.join(appsPath, `${params.slug}.mdx`);

  const source = fs.readFileSync(appFilePath);
  const { content, data } = matter(source);
  // get a single page

  return {
    props: {
      app: { content, data }
    }
  };

}

