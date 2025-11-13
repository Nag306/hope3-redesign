import { useState } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    availability: '',
    experience: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const volunteerOpportunities = [
    {
      title: 'Mentorship Program',
      description: 'Guide students through their academic and career journey',
      commitment: '2-3 hours/week',
      skills: ['Communication', 'Leadership', 'Patience'],
      icon: '🤝'
    },
    {
      title: 'Tutoring Support',
      description: 'Help students with homework and test preparation',
      commitment: '1-2 hours/week',
      skills: ['Subject expertise', 'Teaching ability', 'Patience'],
      icon: '📚'
    },
    {
      title: 'Event Coordination',
      description: 'Organize and manage foundation events and workshops',
      commitment: '5-10 hours/month',
      skills: ['Organization', 'Project management', 'Communication'],
      icon: '🎉'
    },
    {
      title: 'Administrative Support',
      description: 'Assist with office tasks and program administration',
      commitment: '3-4 hours/week',
      skills: ['Computer skills', 'Attention to detail', 'Organization'],
      icon: '📋'
    },
    {
      title: 'Fundraising Assistant',
      description: 'Help with fundraising campaigns and donor outreach',
      commitment: '2-4 hours/week',
      skills: ['Communication', 'Sales experience', 'Networking'],
      icon: '💰'
    },
    {
      title: 'Social Media Manager',
      description: 'Manage social media presence and create content',
      commitment: '3-5 hours/week',
      skills: ['Social media', 'Content creation', 'Marketing'],
      icon: '📱'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.interests.length === 0) newErrors.interests = 'Please select at least one area of interest';
    if (!formData.availability.trim()) newErrors.availability = 'Availability is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleInterestChange = (interest) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    
    handleInputChange('interests', newInterests);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Example API call - replace with your actual endpoint
      const response = await fetch(`${import.meta.env.VITE_API_URL}/volunteer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          interests: [],
          availability: '',
          experience: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Volunteer With Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community of dedicated volunteers and help us create lasting change 
            in the lives of students. Your time and skills can make a real difference.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Volunteer Opportunities"
            subtitle="Find the perfect way to contribute your skills and passion"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{opportunity.icon}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {opportunity.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Time Commitment:</span>
                    <div className="text-primary-600 dark:text-primary-400 font-medium">
                      {opportunity.commitment}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Skills Needed:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {opportunity.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Join Our Team"
            subtitle="Fill out the form below to get started as a volunteer"
            className="mb-12"
          />
          
          {isSubmitted ? (
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Thank You for Your Interest!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We've received your volunteer application. Our team will review it and contact you 
                within 5-7 business days to discuss next steps.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Submit Another Application
              </Button>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    error={errors.name}
                    required
                  />
                  <FormInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    error={errors.email}
                    required
                  />
                </div>
                
                <FormInput
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  error={errors.phone}
                  required
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Areas of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {volunteerOpportunities.map((opportunity, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(opportunity.title)}
                          onChange={() => handleInterestChange(opportunity.title)}
                          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">{opportunity.title}</span>
                      </label>
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.interests}</p>
                  )}
                </div>
                
                <FormInput
                  label="Availability"
                  type="select"
                  name="availability"
                  value={formData.availability}
                  onChange={(e) => handleInputChange('availability', e.target.value)}
                  error={errors.availability}
                  required
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </FormInput>
                
                <FormInput
                  label="Relevant Experience"
                  type="textarea"
                  name="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  placeholder="Tell us about any relevant experience, skills, or qualifications..."
                />
                
                <FormInput
                  label="Additional Message"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Is there anything else you'd like us to know about your interest in volunteering?"
                />
                
                <Button
                  type="submit"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Benefits of Volunteering */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Volunteer With Us?"
            subtitle="Discover the benefits of joining our volunteer community"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Make a Real Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                See the direct results of your efforts in students' lives and educational outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Build Connections
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with like-minded individuals and build lasting relationships in your community.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Develop Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gain valuable experience and develop new skills while contributing to a great cause.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;