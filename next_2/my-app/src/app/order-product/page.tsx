"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing the order");
        router.replace("/");
        //router.back => go back to the previous page
        //router.push("/"); => go to the home page
        //router.replace("/") => replace the current page with the home page
        //router.forward => go forward to the next page
    };
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </div>
    );
}