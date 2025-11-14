import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { programs, testimonials, organizationInfo } from '../data/hope3Data';

const Home = () => {

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
                subtitle={organizationInfo.mission}
                centered={false}
              />
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 dark:text-primary-400">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quality Education</h3>
                    <p className="text-gray-600 dark:text-gray-300">Providing access to quality primary education for children in rural Haiti.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 dark:text-primary-400">🌱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community Partnership</h3>
                    <p className="text-gray-600 dark:text-gray-300">Working hand-in-hand with local communities to create sustainable change.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 dark:text-primary-400">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Breaking Poverty Cycles</h3>
                    <p className="text-gray-600 dark:text-gray-300">Empowering children through education to break the cycle of poverty.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Children learning in Haiti"
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
            subtitle="Comprehensive programs supporting education, nutrition, and community development in Haiti."
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program) => (
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
            Help Us Transform Lives in Haiti
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join us in providing quality education and breaking the cycle of poverty for children in Haiti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/volunteer" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Involved
            </Link>
            <Link 
              to="/donate" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;