import Link from "next/link";

export default function product() {
  return (
    <div> 
      <Link href={"/"}>Home</Link>
      <h1 >Product List</h1>
      <h3><Link href={"/product/1"}>Product 1</Link></h3>
      <h3><Link href={"/product/2"}>Product 2</Link></h3>
      <h3><Link href={"/product/3"}>Product 3</Link></h3>
    </div>
  );
}