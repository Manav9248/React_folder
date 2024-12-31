import React, { useState } from 'react';
import { 
  Dumbbell, 
  Clock, 
  Users, 
  TrophyIcon, 
  MapPin, 
  ChevronRight,
  Menu 
} from 'lucide-react';

const GymLandingPage = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeClass, setActiveClass] = useState(null);

  const classesData = [
    { 
      name: 'Strength Training', 
      time: '6:00 AM - 7:00 AM', 
      intensity: 'High',
      image: '/react.svg'
    },
    { 
      name: 'Yoga Flow', 
      time: '8:00 AM - 9:00 AM', 
      intensity: 'Low',
      image: '/api/placeholder/400/300'
    },
    { 
      name: 'HIIT Workout', 
      time: '5:30 PM - 6:30 PM', 
      intensity: 'High',
      image: '/api/placeholder/400/300'
    },
    { 
      name: 'Spin Class', 
      time: '7:00 PM - 8:00 PM', 
      intensity: 'Medium',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Responsive Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold flex items-center">
            <Dumbbell className="mr-2 w-6 h-6 md:w-8 md:h-8" />
            PowerPeak Fitness
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none"
              aria-label='Toggle mobile menu'
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className={`
            ${mobileMenuOpen ? 'block' : 'hidden'} 
            md:block 
            absolute md:relative 
            top-full left-0 right-0 
            md:top-auto md:left-auto 
            bg-purple-900 md:bg-transparent 
            md:space-x-6
          `}>
            <div className="flex flex-col gap-3 md:flex-row">
              {['Home', 'Classes', 'Membership', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="block md:inline-block p-3 md:p-0 hover:bg-purple-600 md:hover:bg-transparent hover:text-white md:hover:text-blue-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Responsive Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Transform Your Body, <br className="hidden md:block" />Elevate Your Life
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8">
              Join our state-of-the-art fitness community and unlock your full potential with personalized training and world-class facilities.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button 
                className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition flex items-center"
              >
                Get Started <ChevronRight className="ml-2 w-4 h-4 md:w-6 md:h-6" />
              </button>
              <button 
                className="border-2 border-blue-600 text-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Learn More
              </button>
            </div>
          </div>


          <div className="w-full md:w-1/2">
            <img 
              src="./react.svg" 
              alt="Gym Workout" 
              className="rounded-lg shadow-2xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Responsive Classes Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Classes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classesData.map((cls, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${
                  activeClass === index ? 'ring-4 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setActiveClass(index)}
                onMouseLeave={() => setActiveClass(null)}
              >
                <img 
                  src={cls.image} 
                  alt={cls.name} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">
                  {cls.name}
                </h3>
                <div className="flex items-center mb-2">
                  <Clock className="mr-2 text-blue-600 w-5 h-5" />
                  <span>{cls.time}</span>
                </div>
                <div className="flex items-center">
                  <TrophyIcon className="mr-2 text-blue-600 w-5 h-5" />
                  <span>Intensity: {cls.intensity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Stats Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Users, value: 5000, label: 'Active Members' },
            { icon: MapPin, value: 12, label: 'Gym Locations' },
            { icon: Dumbbell, value: 50, label: 'Weekly Classes' }
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <stat.icon className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-3xl md:text-4xl font-bold">
                {stat.value}+
              </h3>
              <p className="text-base md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Responsive Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xl font-bold flex items-center">
            <Dumbbell className="mr-2 w-6 h-6" />
            PowerPeak Fitness
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
            {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="hover:text-blue-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GymLandingPage;