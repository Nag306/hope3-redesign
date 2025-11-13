import { useState } from 'react';
import FormInput from '../components/FormInput';
import FileUploader from '../components/FileUploader';
import Button from '../components/Button';
import Modal from '../components/Modal';

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Step 2: Education Details
    currentEducationLevel: '',
    schoolName: '',
    gpa: '',
    graduationYear: '',
    intendedMajor: '',
    careerGoals: '',
    
    // Step 3: Documents
    documents: []
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const totalSteps = 3;

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    }
    
    if (step === 2) {
      if (!formData.currentEducationLevel) newErrors.currentEducationLevel = 'Education level is required';
      if (!formData.schoolName.trim()) newErrors.schoolName = 'School name is required';
      if (!formData.gpa.trim()) newErrors.gpa = 'GPA is required';
      if (!formData.graduationYear) newErrors.graduationYear = 'Graduation year is required';
      if (!formData.intendedMajor.trim()) newErrors.intendedMajor = 'Intended major is required';
      if (!formData.careerGoals.trim()) newErrors.careerGoals = 'Career goals are required';
    }
    
    if (step === 3) {
      if (formData.documents.length === 0) newErrors.documents = 'At least one document is required';
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

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      // Example API call - replace with your actual endpoint
      const response = await fetch(`${import.meta.env.VITE_API_URL}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                error={errors.firstName}
                required
              />
              <FormInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                error={errors.lastName}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={errors.email}
                required
              />
              <FormInput
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                error={errors.phone}
                required
              />
            </div>
            
            <FormInput
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              error={errors.dateOfBirth}
              required
            />
            
            <FormInput
              label="Address"
              name="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              error={errors.address}
              required
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormInput
                label="City"
                name="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                error={errors.city}
                required
              />
              <FormInput
                label="State"
                name="state"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                error={errors.state}
                required
              />
              <FormInput
                label="ZIP Code"
                name="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                error={errors.zipCode}
                required
              />
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education Details
            </h2>
            
            <FormInput
              label="Current Education Level"
              type="select"
              name="currentEducationLevel"
              value={formData.currentEducationLevel}
              onChange={(e) => handleInputChange('currentEducationLevel', e.target.value)}
              error={errors.currentEducationLevel}
              required
            >
              <option value="">Select education level</option>
              <option value="high-school">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
            </FormInput>
            
            <FormInput
              label="School/University Name"
              name="schoolName"
              value={formData.schoolName}
              onChange={(e) => handleInputChange('schoolName', e.target.value)}
              error={errors.schoolName}
              required
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Current GPA"
                name="gpa"
                value={formData.gpa}
                onChange={(e) => handleInputChange('gpa', e.target.value)}
                error={errors.gpa}
                required
              />
              <FormInput
                label="Expected Graduation Year"
                type="number"
                name="graduationYear"
                min="2024"
                max="2030"
                value={formData.graduationYear}
                onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                error={errors.graduationYear}
                required
              />
            </div>
            
            <FormInput
              label="Intended Major/Field of Study"
              name="intendedMajor"
              value={formData.intendedMajor}
              onChange={(e) => handleInputChange('intendedMajor', e.target.value)}
              error={errors.intendedMajor}
              required
            />
            
            <FormInput
              label="Career Goals and Aspirations"
              type="textarea"
              name="careerGoals"
              value={formData.careerGoals}
              onChange={(e) => handleInputChange('careerGoals', e.target.value)}
              error={errors.careerGoals}
              placeholder="Tell us about your career goals and how this scholarship will help you achieve them..."
              required
            />
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Upload Documents
            </h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Required Documents:</h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Official transcripts</li>
                <li>• Letter of recommendation</li>
                <li>• Personal statement or essay</li>
                <li>• Proof of financial need (optional)</li>
              </ul>
            </div>
            
            <FileUploader
              label="Upload Documents"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              multiple={true}
              onFilesChange={(files) => handleInputChange('documents', files)}
              error={errors.documents}
              required
            />
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Scholarship Application
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button onClick={handleNext}>
                Next Step
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Submit Application
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Application Submitted Successfully!"
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you for your application! We will review your submission and contact you within 2-3 weeks.
          </p>
          <Button onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Apply;