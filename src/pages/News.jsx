import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const News = () => {
  const featuredArticle = {
    id: 1,
    title: 'Hope Foundation Reaches Milestone: 500 Students Supported',
    excerpt: 'We are proud to announce that Hope Foundation has now supported over 500 students in their educational journey, marking a significant milestone in our mission.',
    content: 'This achievement represents years of dedication, community support, and the unwavering belief that education can transform lives...',
    author: 'Sarah Williams',
    date: '2024-02-15',
    category: 'Milestone',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'hope-foundation-reaches-milestone-500-students',
    featured: true,
    readTime: '5 min read'
  };

  const articles = [
    {
      id: 2,
      title: 'New STEM Program Launches with Record Enrollment',
      excerpt: 'Our latest STEM education program has attracted 150 students in its first semester, exceeding all expectations.',
      author: 'Michael Chen',
      date: '2024-02-10',
      category: 'Programs',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'new-stem-program-launches-record-enrollment',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Student Spotlight: Maria Rodriguez Wins National Science Fair',
      excerpt: 'Scholarship recipient Maria Rodriguez takes first place at the National High School Science Fair with her innovative research project.',
      author: 'Emily Rodriguez',
      date: '2024-02-05',
      category: 'Student Success',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'student-spotlight-maria-rodriguez-science-fair',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Partnership Announcement: Tech Giants Join Our Mentorship Program',
      excerpt: 'Leading technology companies have partnered with Hope Foundation to provide mentorship opportunities for our students.',
      author: 'David Thompson',
      date: '2024-01-28',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'partnership-tech-giants-mentorship-program',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Annual Scholarship Gala Raises Record $250,000',
      excerpt: 'This year\'s scholarship gala was our most successful fundraising event to date, raising funds to support 50 new scholarships.',
      author: 'Sarah Williams',
      date: '2024-01-20',
      category: 'Fundraising',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'annual-scholarship-gala-raises-record-funds',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Digital Literacy Program Expands to Rural Communities',
      excerpt: 'Our digital literacy initiative now reaches students in rural areas, bridging the digital divide in education.',
      author: 'Michael Chen',
      date: '2024-01-15',
      category: 'Programs',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slug: 'digital-literacy-program-expands-rural-communities',
      readTime: '5 min read'
    }
  ];

  const categories = ['All', 'Programs', 'Student Success', 'Partnerships', 'Fundraising', 'Milestone'];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            News & Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest news, student success stories, and program updates 
            from Hope Foundation.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              Featured Story
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            
            <div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <span className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">
                  {featuredArticle.category}
                </span>
                <span>{formatDate(featuredArticle.date)}</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {featuredArticle.title}
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {featuredArticle.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {featuredArticle.author}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Executive Director
                    </div>
                  </div>
                </div>
                
                <Link
                  to={`/news/${featuredArticle.slug}`}
                  className="btn-primary"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Latest News"
            subtitle="Discover more stories about our impact and community"
            className="mb-12"
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="card group hover:scale-105 transition-transform duration-300">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <span className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full text-xs">
                    {article.category}
                  </span>
                  <span>{formatDate(article.date)}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {article.author}
                    </span>
                  </div>
                  
                  <Link
                    to={`/news/${article.slug}`}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-outline">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Stay Informed"
            subtitle="Subscribe to our newsletter for the latest updates and stories"
            className="mb-8"
          />
          
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
              Get monthly updates on our programs, student achievements, and upcoming events.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle
            title="Follow Our Journey"
            subtitle="Connect with us on social media for daily updates and behind-the-scenes content"
            className="mb-8"
          />
          
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Follow us on Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a
              href="#"
              className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Follow us on Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            
            <a
              href="#"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="#"
              className="w-12 h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;