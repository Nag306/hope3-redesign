import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Scholarship Gala',
      date: '2024-04-15',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Ballroom, City Convention Center',
      description: 'Join us for an elegant evening celebrating our scholarship recipients and raising funds for future programs.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Fundraising',
      price: '$75 per person',
      featured: true
    },
    {
      id: 2,
      title: 'STEM Workshop Series',
      date: '2024-03-20',
      time: '2:00 PM - 5:00 PM',
      location: 'Hope Foundation Learning Center',
      description: 'Interactive workshops covering robotics, coding, and engineering for high school students.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Education',
      price: 'Free',
      featured: false
    },
    {
      id: 3,
      title: 'College Application Workshop',
      date: '2024-03-25',
      time: '10:00 AM - 2:00 PM',
      location: 'Virtual Event',
      description: 'Expert guidance on college applications, essays, and financial aid processes.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Workshop',
      price: 'Free',
      featured: false
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Mentorship Program Launch',
      date: '2024-01-15',
      location: 'Hope Foundation Office',
      description: 'Successfully launched our new mentorship program connecting 50 students with industry professionals.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      attendees: 75
    },
    {
      id: 5,
      title: 'Holiday Giving Campaign',
      date: '2023-12-20',
      location: 'Community Center',
      description: 'Distributed holiday gifts and supplies to 200 students and their families.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      attendees: 200
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isEventSoon = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Events & Programs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for inspiring events, educational workshops, and community gatherings 
            that bring together students, volunteers, and supporters.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Upcoming Events"
            subtitle="Don't miss these exciting opportunities to get involved"
            className="mb-12"
          />
          
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className={`card ${event.featured ? 'ring-2 ring-primary-500' : ''}`}>
                {event.featured && (
                  <div className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Featured Event
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 lg:h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
                          <span className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formatDate(event.date)}</span>
                          </span>
                          {isEventSoon(event.date) && (
                            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                          <span className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{event.time}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{event.location}</span>
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm px-3 py-1 rounded-full">
                          {event.category}
                        </span>
                        <div className="mt-2 font-semibold text-gray-900 dark:text-white">
                          {event.price}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {event.description}
                    </p>
                    
                    <div className="flex space-x-4">
                      <Button>
                        Register Now
                      </Button>
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Past Events"
            subtitle="Look back at our recent successful events and their impact"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="card">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(event.date)}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{event.attendees} attendees</span>
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Event Categories"
            subtitle="Explore different types of events we organize throughout the year"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Educational Workshops
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Skill-building sessions and academic support programs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Fundraising Events
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Galas, auctions, and campaigns to support our mission
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Community Outreach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Connecting with local communities and building partnerships
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Celebrations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Graduation ceremonies and achievement recognition events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-600 dark:bg-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated on Our Events
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter to receive updates about upcoming events and programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;