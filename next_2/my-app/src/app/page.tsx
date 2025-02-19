import Link from 'next/link';

export default function Home(){
    return (
      <div>
        <h1>Home Page</h1>
        <br />
        <Link href={"/blog"}>Blog</Link>
        <br />
        <Link href={"/product"}>Product</Link>
      </div>
    );
}