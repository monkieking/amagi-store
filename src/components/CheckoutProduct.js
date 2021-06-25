import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) {
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <p>{title}</p>
      <div className="flex">
        {Array(rating)
          .fill()
          .map(() => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-3">{description}</p>
      <h3>₹{Math.floor(price) * 100}</h3>
    </div>
  );
}

export default CheckoutProduct;
