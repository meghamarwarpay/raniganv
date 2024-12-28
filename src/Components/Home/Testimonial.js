import Image from "next/image";
import img1 from '../../assets/pinkcityimg/userwoman.png';
import img2 from '../../assets/pinkcityimg/userman.png';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rina S.',
      role: 'Verified Customer',
      feedback:
        'Shopping on Ranigaon was like planting a seed of trust. The quality and service nurtured it into a beautiful experience. Highly recommend!',
      image: img1,
    },
    {
      name: 'Arvind P.',
      role: 'Frequent Buyer',
      feedback:
        'Ranigaon is like fertile soil for great shopping. Every interaction grows into satisfaction, thanks to their amazing service!',
      image: img2,
    },
    {
      name: 'Nisha K.',
      role: 'New Customer',
      feedback:
        'The variety on Ranigaon is like a lush garden. I found exactly what I needed, and the experience felt fresh and fulfilling!',
      image: img1,
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center text-pink mb-4">Nurturing Trust, Growing Happiness</h1>
      <p className="text-center text-secondary mb-5">
        At Ranigaon, we believe in planting seeds of trust and nurturing them into lasting relationships. Here’s what our customers have to say about their fruitful experiences.
      </p>

      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px' }}
                />
                <h5 className="card-title text-dark">{testimonial.name}</h5>
                <h6 className="text-muted">{testimonial.role}</h6>
                <p className="card-text text-secondary mt-3">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
