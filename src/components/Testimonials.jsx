import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      image: 'https://i.pravatar.cc/150?img=1',
      name: 'Sarah Johnson',
      rating: 5,
      review: 'Amazing product! It has completely transformed how I work. The interface is intuitive and the features are exactly what I needed.',
    },
    {
      image: 'https://i.pravatar.cc/150?img=2',
      name: 'Michael Chen',
      rating: 4,
      review: 'Very impressed with the quality and attention to detail. The support team is also incredibly helpful and responsive.',
    },
    {
      image: 'https://i.pravatar.cc/150?img=3',
      name: 'Emily Rodriguez',
      rating: 5,
      review: 'Best decision I made for my business. The ROI has been incredible and the learning curve was minimal.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center md:text-left">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">
              View all reviews
            </button>
          </div>
        </div>
        <div className="space-y-12 md:space-y-6 pt-8 md:pt-0">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;