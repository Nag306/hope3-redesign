import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'STEM Education Program',
      description: 'Comprehensive science, technology, engineering, and mathematics education for underserved communities with hands-on learning experiences.',
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
      description: 'One-on-one mentoring connecting students with industry professionals and successful alumni for career guidance.',
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
      description: 'Teaching essential computer skills and digital literacy to bridge the technology gap in underserved communities.',
      category: 'Technology',
      icon: '💻',
      duration: '3 months',
      participants: 300,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'digital-literacy'
    },
    {
      id: 4,
      title: 'College Prep Academy',
      description: 'Intensive preparation program for college applications, standardized tests, and academic success.',
      category: 'Academic',
      icon: '📚',
      duration: '8 months',
      participants: 120,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'college-prep'
    },
    {
      id: 5,
      title: 'Leadership Development',
      description: 'Building leadership skills and civic engagement among young people to create future community leaders.',
      category: 'Leadership',
      icon: '👥',
      duration: '6 months',
      participants: 80,
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'leadership-development'
    },
    {
      id: 6,
      title: 'Career Readiness Workshop',
      description: 'Professional development workshops covering resume writing, interview skills, and workplace readiness.',
      category: 'Career',
      icon: '💼',
      duration: '4 months',
      participants: 180,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'career-readiness'
    }
  ];

  const categories = ['All', 'Education', 'Mentorship', 'Technology', 'Academic', 'Leadership', 'Career'];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive educational programs designed to support students at every stage 
            of their academic and professional journey.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Program Benefits"
            subtitle="What you can expect from our comprehensive support system"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Personalized Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored guidance and resources based on individual student needs and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Network Access
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with professionals, alumni, and peers in your field of interest.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Skill Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build both academic and professional skills essential for success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Innovation Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Exposure to cutting-edge technologies and innovative thinking approaches.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Achievement Recognition
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Celebrate milestones and achievements throughout your educational journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤲</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Community Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Opportunities to give back and make a positive impact in your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 dark:bg-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Programs?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Take the first step towards transforming your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/apply" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;