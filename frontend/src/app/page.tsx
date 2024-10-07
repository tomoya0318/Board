import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Link href="/board">
        <div>board</div>
      </Link>
      <Link href="/list">
        <div>list</div>
      </Link>
    </>
  );
}

export default Home;