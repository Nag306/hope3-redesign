import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Scholarships = () => {
  const scholarships = [
    {
      id: 1,
      title: 'Merit-Based Scholarship',
      amount: 'Up to $5,000',
      duration: 'Per academic year',
      eligibility: ['GPA 3.5 or higher', 'Demonstrated leadership', 'Community involvement'],
      deadline: 'March 15, 2024',
      renewable: true,
      description: 'Recognizing academic excellence and leadership potential in high-achieving students.'
    },
    {
      id: 2,
      title: 'Need-Based Scholarship',
      amount: 'Up to $7,500',
      duration: 'Per academic year',
      eligibility: ['Financial need demonstrated', 'GPA 2.5 or higher', 'Full-time enrollment'],
      deadline: 'April 30, 2024',
      renewable: true,
      description: 'Supporting students who demonstrate financial need and academic commitment.'
    },
    {
      id: 3,
      title: 'STEM Excellence Award',
      amount: 'Up to $10,000',
      duration: 'Per academic year',
      eligibility: ['STEM major', 'GPA 3.7 or higher', 'Research experience preferred'],
      deadline: 'February 28, 2024',
      renewable: true,
      description: 'Encouraging the next generation of scientists, technologists, engineers, and mathematicians.'
    },
    {
      id: 4,
      title: 'First-Generation College Scholarship',
      amount: 'Up to $6,000',
      duration: 'Per academic year',
      eligibility: ['First in family to attend college', 'GPA 3.0 or higher', 'Financial need'],
      deadline: 'May 15, 2024',
      renewable: true,
      description: 'Supporting first-generation college students in achieving their educational dreams.'
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Review Requirements',
      description: 'Check eligibility criteria for each scholarship program',
      icon: '📋'
    },
    {
      step: 2,
      title: 'Prepare Documents',
      description: 'Gather transcripts, recommendations, and personal statement',
      icon: '📄'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Complete online application with all required materials',
      icon: '📤'
    },
    {
      step: 4,
      title: 'Interview Process',
      description: 'Selected candidates participate in interview rounds',
      icon: '🎤'
    },
    {
      step: 5,
      title: 'Award Notification',
      description: 'Recipients are notified and awards are distributed',
      icon: '🏆'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Scholarship Opportunities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Discover scholarship opportunities designed to make higher education accessible 
            and affordable for students from all backgrounds.
          </p>
          <Link to="/apply" className="btn-primary text-lg px-8 py-4">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Available Scholarships */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Available Scholarships"
            subtitle="Choose from our range of scholarship programs tailored to different student needs"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className="card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                    {scholarship.title}
                  </h3>
                  {scholarship.renewable && (
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2 py-1 rounded-full">
                      Renewable
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Award Amount</div>
                    <div className="font-semibold text-primary-600 dark:text-primary-400">
                      {scholarship.amount}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {scholarship.duration}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {scholarship.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Eligibility Requirements:
                  </h4>
                  <ul className="space-y-1">
                    {scholarship.eligibility.map((req, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Application Deadline</div>
                    <div className="font-semibold text-red-600 dark:text-red-400">
                      {scholarship.deadline}
                    </div>
                  </div>
                  <Link to="/apply" className="btn-primary">
                    Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Application Process"
            subtitle="Follow these simple steps to apply for our scholarships"
            className="mb-12"
          />
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 dark:bg-primary-800 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {applicationProcess.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative z-10 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-20">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Tips */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="General Requirements"
                centered={false}
                className="mb-6"
              />
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Academic Transcripts</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Official transcripts from all attended institutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Letters of Recommendation</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">2-3 letters from teachers, counselors, or mentors</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Personal Statement</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Essay describing your goals and why you deserve the scholarship</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Financial Documentation</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">FAFSA or other proof of financial need (if applicable)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle
                title="Application Tips"
                centered={false}
                className="mb-6"
              />
              
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">💡</span>
                    <div>
                      <h4 className="font-semibold text-primary-900 dark:text-primary-100">Start Early</h4>
                      <p className="text-primary-800 dark:text-primary-200 text-sm">Begin your application at least 2 months before the deadline</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">✍️</span>
                    <div>
                      <h4 className="font-semibold text-primary-900 dark:text-primary-100">Personal Touch</h4>
                      <p className="text-primary-800 dark:text-primary-200 text-sm">Make your personal statement unique and authentic</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">🔍</span>
                    <div>
                      <h4 className="font-semibold text-primary-900 dark:text-primary-100">Proofread Everything</h4>
                      <p className="text-primary-800 dark:text-primary-200 text-sm">Review all documents for errors before submitting</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <h4 className="font-semibold text-primary-900 dark:text-primary-100">Ask Questions</h4>
                      <p className="text-primary-800 dark:text-primary-200 text-sm">Contact us if you need clarification on requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 dark:bg-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Don't let financial barriers stop you from achieving your educational dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apply" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Start Application
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;