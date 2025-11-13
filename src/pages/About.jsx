import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';

const About = () => {
  const timeline = [
    {
      year: '2014',
      title: 'Foundation Established',
      description: 'Hope Foundation was founded with a mission to provide educational opportunities to underserved communities.'
    },
    {
      year: '2016',
      title: 'First Scholarship Program',
      description: 'Launched our first scholarship program, supporting 25 students in their educational journey.'
    },
    {
      year: '2018',
      title: 'Mentorship Network',
      description: 'Established our mentorship network, connecting students with industry professionals.'
    },
    {
      year: '2020',
      title: 'Digital Expansion',
      description: 'Adapted to digital learning and expanded our reach to support students during the pandemic.'
    },
    {
      year: '2023',
      title: '500+ Students Supported',
      description: 'Reached the milestone of supporting over 500 students with scholarships and programs.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Williams',
      position: 'Executive Director',
      role: 'Leadership',
      bio: 'Former educator with 20+ years of experience in educational policy and program development.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      social: {
        linkedin: '#',
        email: 'sarah@hopefoundation.org'
      }
    },
    {
      name: 'Michael Chen',
      position: 'Program Director',
      role: 'Programs',
      bio: 'Passionate about creating innovative educational programs that make a lasting impact.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      social: {
        linkedin: '#',
        email: 'michael@hopefoundation.org'
      }
    },
    {
      name: 'Emily Rodriguez',
      position: 'Community Outreach Manager',
      role: 'Outreach',
      bio: 'Dedicated to building strong relationships with communities and identifying students in need.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      social: {
        linkedin: '#',
        email: 'emily@hopefoundation.org'
      }
    },
    {
      name: 'David Thompson',
      position: 'Financial Aid Coordinator',
      role: 'Finance',
      bio: 'Ensures transparent and efficient distribution of scholarships and financial assistance.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      social: {
        linkedin: '#',
        email: 'david@hopefoundation.org'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Hope Foundation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            For nearly a decade, we've been dedicated to breaking down barriers to education 
            and creating pathways to success for students from all backgrounds.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Our Mission"
                centered={false}
                className="mb-6"
              />
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To provide equal access to quality education for all students, regardless of their 
                socioeconomic background, by offering scholarships, mentorship, and comprehensive 
                support programs that empower them to achieve their academic and career goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Equal access to education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive support systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Long-term student success</span>
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle
                title="Our Vision"
                centered={false}
                className="mb-6"
              />
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                A world where every student has the opportunity to pursue their educational dreams 
                and contribute meaningfully to society, creating a cycle of positive change that 
                benefits entire communities.
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Our Impact Goals
                </h3>
                <ul className="space-y-2 text-primary-800 dark:text-primary-200">
                  <li>• Support 1,000+ students by 2025</li>
                  <li>• Expand to 10 new communities</li>
                  <li>• Achieve 95% graduation rate</li>
                  <li>• Create sustainable funding model</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Journey"
            subtitle="A timeline of our growth and impact over the years"
            className="mb-12"
          />
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the dedicated professionals working to make education accessible for all"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary-600 dark:bg-primary-700">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-12">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
              <p className="text-primary-100">
                We operate with transparency, honesty, and accountability in all our actions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Compassion</h3>
              <p className="text-primary-100">
                We approach every student with empathy and understanding of their unique challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-primary-100">
                We strive for the highest standards in our programs and support services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;