import { IMG_CDN_URL } from "../config";

const FoodItems = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-5nes,2 m-2 p-2 shadow-lg bg-pink-50 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItems;
