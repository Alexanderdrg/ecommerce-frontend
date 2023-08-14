import { useState } from 'react';
import { IoCart, IoChevronBack, IoChevronForward } from 'react-icons/io5';

function ProductCard({ images, name, dollar_price }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleNextImage() {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  }

  function handlePrevImage() {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  }

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-500">
      <div className="relative h-64 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={`data:image/png;base64,${image}`}
            alt={name}
          />
        ))}
        <button
          className="absolute top-0 left-0 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={handlePrevImage}
        >
          <IoChevronBack size={25} />
        </button>
        <button
          className="absolute top-0 right-0 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={handleNextImage}
        >
          <IoChevronForward size={25} />
        </button>
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-stone-800 text-2xl mb-2">{name}</div>
        <p className="text-white font-bold text-2xl">${dollar_price}</p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-center items-center">
        <button className="bg-stone-800 text-white font-bold py-2 px-4 rounded-lg flex items-center">
          Add to Cart
          <IoCart size={25} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
