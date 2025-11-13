import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const donationMethods = [
    {
      name: 'Credit/Debit Card',
      icon: '💳',
      description: 'Secure online payment via Stripe',
      available: true
    },
    {
      name: 'PayPal',
      icon: '🅿️',
      description: 'Quick and secure PayPal payment',
      available: true
    },
    {
      name: 'Bank Transfer',
      icon: '🏦',
      description: 'Direct bank transfer',
      available: true
    },
    {
      name: 'UPI Payment',
      icon: '📱',
      description: 'Pay using UPI apps',
      available: true
    }
  ];

  const impactData = [
    {
      amount: '$25',
      impact: 'Provides school supplies for one student for a month',
      icon: '📚'
    },
    {
      amount: '$100',
      impact: 'Covers textbooks for one student for a semester',
      icon: '📖'
    },
    {
      amount: '$500',
      impact: 'Funds a complete mentorship program for one student',
      icon: '🎓'
    },
    {
      amount: '$1,000',
      impact: 'Provides a full scholarship for one semester',
      icon: '🌟'
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value);
    setSelectedAmount('');
  };

  const getCurrentAmount = () => {
    return customAmount || selectedAmount;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your donation helps us provide educational opportunities to students who need them most. 
            Every contribution makes a difference in a student's life.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <SectionTitle
                title="Make a Donation"
                centered={false}
                className="mb-8"
              />

              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Donation Type
                </h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                      donationType === 'one-time'
                        ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-400'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                      donationType === 'monthly'
                        ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-400'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Select Amount
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg border-2 transition-colors ${
                        selectedAmount === amount
                          ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-400'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Payment Methods
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {donationMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary-400 transition-colors cursor-pointer"
                    >
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {method.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {method.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* QR Code Section */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Quick Payment via QR Code
                </h3>
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">📱</div>
                      <div className="text-xs">QR Code</div>
                      <div className="text-xs">Placeholder</div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                  Scan with your UPI app to donate instantly
                </p>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                disabled={!getCurrentAmount()}
              >
                Donate ${getCurrentAmount() || '0'} {donationType === 'monthly' ? '/month' : ''}
              </Button>
            </div>

            {/* Impact Information */}
            <div>
              <SectionTitle
                title="Your Impact"
                centered={false}
                className="mb-8"
              />

              <div className="space-y-6 mb-8">
                {impactData.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary-600 dark:text-primary-400 mb-1">
                        {item.amount}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {item.impact}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Current Campaign: STEM Education Fund
                </h3>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <span>$75,000 raised</span>
                    <span>$100,000 goal</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary-600 to-accent-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Help us reach our goal to fund STEM education programs for 200 students this year.
                </p>
              </div>

              {/* Tax Information */}
              <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Tax Deductible
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Hope Foundation is a 501(c)(3) nonprofit organization. 
                  Your donation is tax-deductible to the extent allowed by law. 
                  Tax ID: 12-3456789
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Giving Methods */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Other Ways to Give"
            subtitle="Explore different ways you can support our mission"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Corporate Sponsorship
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Partner with us to create lasting impact through corporate giving programs.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Planned Giving
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Leave a lasting legacy through bequests, trusts, and other planned gifts.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                In-Kind Donations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Donate goods, services, or equipment to support our programs directly.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;