import React from 'react';
import Slider from 'react-slick';
import Card from '@/components/cards';
import useCases from '@/data/useCases'; // Adjust the import path as necessary
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router';


const ProjectsCard: React.FC=() => {
  
  const navigate = (path: string) => {
  };

  // Use 'navigate' in place of 'handleElaborate' for more intuitive naming
  const handleElaborate = (path: string) => {
    navigate(`/some-route/${path}`); // Adjust the URL structure as necessary
  };


  // Slider settings
  const settings={
    infinite: true,
    arrows: true,         // Show prev/next arrows
    speed: 500,
    dots: false,
    slidesToShow: 3, // Default value for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 1, // Display 3 slides for medium screens
        },
      },
      {
        breakpoint: 1200, // Large devices (desktops, 1200px and up)
        settings: {
          slidesToShow: 1, // Display 3 slides for large screens
        },
      },
    ],
  };


  return (
    <div className='bg-teal-900' id='portfolio'>
      <h1 className="text-4xl font-bold text-center p-8 m-8">Explore some of our Innovative Projects Portfolio</h1>
      <div className="  p-8 m-8 ">
        <Slider {...settings}>
          {useCases.map(useCase => (
            <div key={useCase.id} className="px-4">
              <Card
                title={useCase.title}
                description={useCase.description}
                imageUrl={useCase.imageUrl}
                techStack={useCase.techStack}
                path={useCase.path} // Assuming each useCase object has a 'path' field
                onElaborate={() => handleElaborate(useCase.path)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsCard;
