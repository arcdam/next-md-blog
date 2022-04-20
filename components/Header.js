import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          Dev Blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
