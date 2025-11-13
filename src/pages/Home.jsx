import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const programs = [
    {
      id: 1,
      title: 'STEM Education Program',
      description: 'Comprehensive science, technology, engineering, and mathematics education for underserved communities.',
      category: 'Education',
      icon: '🔬',
      duration: '12 months',
      participants: 150,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'stem-education'
    },
    {
      id: 2,
      title: 'Mentorship Network',
      description: 'One-on-one mentoring connecting students with industry professionals and successful alumni.',
      category: 'Mentorship',
      icon: '🤝',
      duration: '6 months',
      participants: 200,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'mentorship-network'
    },
    {
      id: 3,
      title: 'Digital Literacy Initiative',
      description: 'Teaching essential computer skills and digital literacy to bridge the technology gap.',
      category: 'Technology',
      icon: '💻',
      duration: '3 months',
      participants: 300,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'digital-literacy'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      quote: 'The scholarship program changed my life completely. I went from struggling to pay for books to graduating with honors in Computer Science.',
      program: 'STEM Scholarship Recipient',
      year: 'Class of 2023',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Michael Chen',
      quote: 'The mentorship I received helped me navigate college applications and career choices. Now I\'m giving back as a mentor myself.',
      program: 'Mentorship Program Graduate',
      year: 'Class of 2022',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Emily Rodriguez',
      quote: 'Hope Foundation didn\'t just provide financial support, they believed in my potential when I didn\'t believe in myself.',
      program: 'Full Scholarship Recipient',
      year: 'Class of 2024',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <main>
      <HeroSection />
      
      {/* Mission Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Mission"
                subtitle="Breaking barriers to education and creating pathways to success for every student."
                centered={false}
              />
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 dark:text-primary-400">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Equal Access</h3>
                    <p className="text-gray-600 dark:text-gray-300">Ensuring every student has access to quality education regardless of their background.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 dark:text-primary-400">🌱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Holistic Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">Providing not just financial aid, but mentorship, resources, and ongoing guidance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 dark:text-primary-400">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Future Leaders</h3>
                    <p className="text-gray-600 dark:text-gray-300">Empowering students to become leaders and change-makers in their communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Students collaborating on a project"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Programs"
            subtitle="Comprehensive educational programs designed to support students at every stage of their journey."
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 dark:bg-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of students who have transformed their lives through education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apply" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Apply Now
            </Link>
            <Link 
              to="/donate" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;