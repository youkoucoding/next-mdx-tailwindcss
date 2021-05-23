import Link from 'next/link';

export default function Header() {
  return (
    <nav className='px-8 py-4 bg-purple-400 text-purple-800'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* left side */}
        <Logo />

        {/* right side */}
        <Nav />
      </div>
    </nav>
  );
}

const Logo = () => {
  return (
    <Link href={'/'}>
      <a className='relative inline-block py-2 px-4'>
        {/* background shadow with absolutely positioned item */}

        <span className='block absolute inset-0 bg-white rounded-lg transform -skew-x-12'></span>
        {/* content */}
        <span className='block relative font-semibold text-blue-800'>
          App Platform
        </span>
      </a>
    </Link>
  );
};

const Nav = () => {
  return (
    <div className='hidden md:flex items-center'>
      <a href='#' className='font-semibold py-2 px-3 hover:text-white'>
        Docs
      </a>
      <a href='#' className='font-semibold py-2 px-3 hover:text-white'>
        DashBoard
      </a>
    </div>
  );
};
