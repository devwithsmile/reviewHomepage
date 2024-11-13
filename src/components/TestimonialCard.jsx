import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ image, name, rating, review }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 md:pl-16 px-6 pt-14 md:pt-6 pb-6 rounded-lg shadow-lg">
      {/* Profile Image - Top center on mobile, left side on desktop */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-8 md:top-1/2 md:left-0 md:-translate-y-1/2 transition-all duration-300">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover ring-4 ring-white dark:ring-gray-800"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-center md:justify-start space-x-1 mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-center md:text-left">{review}</p>
        <p className="font-semibold text-gray-800 dark:text-white text-center md:text-left">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;