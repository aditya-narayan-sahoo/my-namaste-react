import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  //console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an item
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div>
          <div
            key={item.card.info.id}
            className="border-slate-300 shadow-md border-b-2 p-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span> <br />
                <span>₹{item.card.info.price / 100}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-1 mx-12 my-20 bg-white shadow-lg text-green-500 border rounded-md border-green-500 transform transition-transform duration-300 hover:scale-125"
                  onClick={() => handleAddItem(item)}
                >
                  Add+
                </button>
              </div>
              <img
                className="rounded-lg"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
                alt="Item-Image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
