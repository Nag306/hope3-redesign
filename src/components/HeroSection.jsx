import { Link } from 'react-router-dom';
import { organizationInfo, stats } from '../data/hope3Data';

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {organizationInfo.tagline.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="text-primary-600 dark:text-primary-400">{organizationInfo.tagline.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {organizationInfo.mission}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/apply" className="btn-primary text-center">
                Support Our Mission
              </Link>
              <Link to="/programs" className="btn-secondary text-center">
                Explore Programs
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{stats.studentsSupported}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Students Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{stats.schools}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Schools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{stats.yearsImpact}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Impact</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Children learning in Haiti classroom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🇭🇹</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{stats.successRate} Success Rate</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Student Achievement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-200 dark:bg-primary-900 rounded-full opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-accent-200 dark:bg-accent-900 rounded-full opacity-20"></div>
    </section>
  );
};

export default HeroSection;