"use client";
import { useRouter } from 'next/navigation';


export default function OrderProduct() {
    const router = useRouter();
    const hadleClick = () => {
        console.log("Order placed successfully!");
        router.push("/")
        // To replace the current entry in the history stack instead of adding a new one use replace
        // router.replace("/")
        // To go back to the previous page in history use
        // router.back()
        // To go forward to the next page in history use
        // router.forward()

    };

  return (
  <>
  <h1>Order Product</h1>
  <button onClick={hadleClick}>Place Order</button>
  </>
  )
}