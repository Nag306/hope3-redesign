import { useParams, Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const ProgramDetail = () => {
  const { slug } = useParams();

  // Mock program data - in a real app, this would come from an API
  const programData = {
    'stem-education': {
      title: 'STEM Education Program',
      description: 'Comprehensive science, technology, engineering, and mathematics education for underserved communities.',
      fullDescription: 'Our STEM Education Program is designed to provide students with hands-on learning experiences in science, technology, engineering, and mathematics. Through interactive workshops, laboratory sessions, and real-world projects, students develop critical thinking skills and gain practical knowledge that prepares them for future careers in STEM fields.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '12 months',
      participants: 150,
      category: 'Education',
      icon: '🔬',
      features: [
        'Hands-on laboratory experiments',
        'Coding and programming workshops',
        'Engineering design challenges',
        'Mathematics problem-solving sessions',
        'Science fair participation',
        'Industry mentorship'
      ],
      requirements: [
        'High school enrollment',
        'Basic mathematics proficiency',
        'Interest in STEM fields',
        'Commitment to full program duration'
      ],
      schedule: 'Saturdays 9:00 AM - 3:00 PM',
      location: 'Hope Foundation STEM Center'
    }
  };

  const program = programData[slug] || programData['stem-education'];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 dark:bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link to="/programs" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  Programs
                </Link>
              </li>
              <li>
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-gray-900 dark:text-white font-medium">
                {program.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{program.icon}</span>
                <span className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                  {program.category}
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {program.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {program.fullDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply" className="btn-primary">
                  Apply Now
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div>
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <SectionTitle
                title="Program Features"
                centered={false}
                className="mb-8"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <SectionTitle
                title="Requirements"
                centered={false}
                className="mb-8"
              />
              
              <div className="space-y-4">
                {program.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Program Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</div>
                    <div className="text-gray-900 dark:text-white font-semibold">{program.duration}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Current Participants</div>
                    <div className="text-gray-900 dark:text-white font-semibold">{program.participants} students</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Schedule</div>
                    <div className="text-gray-900 dark:text-white font-semibold">{program.schedule}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</div>
                    <div className="text-gray-900 dark:text-white font-semibold">{program.location}</div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-3">
                  <Link to="/apply" className="btn-primary w-full text-center block">
                    Apply for Program
                  </Link>
                  <Link to="/contact" className="btn-outline w-full text-center block">
                    Ask Questions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Related Programs"
            subtitle="Explore other programs that might interest you"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for related programs */}
            <div className="card">
              <div className="text-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3">
                Mentorship Network
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                One-on-one mentoring connecting students with industry professionals.
              </p>
              <Link to="/programs/mentorship-network" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="card">
              <div className="text-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3">
                Digital Literacy Initiative
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Teaching essential computer skills and digital literacy.
              </p>
              <Link to="/programs/digital-literacy" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="card">
              <div className="text-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3">
                College Prep Academy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Intensive preparation for college applications and standardized tests.
              </p>
              <Link to="/programs/college-prep" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;