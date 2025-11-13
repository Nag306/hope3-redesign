import { useParams, Link } from 'react-router-dom';

const NewsDetail = () => {
  const { slug } = useParams();

  // Mock article data - in a real app, this would come from an API
  const articleData = {
    title: 'Hope Foundation Reaches Milestone: 500 Students Supported',
    content: `
      <p>We are incredibly proud to announce that Hope Foundation has reached a significant milestone in our mission to make education accessible to all. As of this month, we have successfully supported over 500 students in their educational journey, providing scholarships, mentorship, and comprehensive support programs.</p>

      <p>This achievement represents years of dedication from our team, generous support from our donors, and the unwavering belief that education can transform lives and communities. Each of these 500 students has a unique story, but they all share a common thread: the determination to pursue their educational dreams despite financial barriers.</p>

      <h2>The Journey So Far</h2>
      
      <p>When Hope Foundation was established in 2014, we started with a simple but powerful vision: to ensure that no student's educational aspirations would be limited by their financial circumstances. Our first year, we were able to support 25 students with scholarships and basic educational resources.</p>

      <p>Over the years, we've expanded our programs to include:</p>
      <ul>
        <li>Merit-based and need-based scholarships</li>
        <li>STEM education programs</li>
        <li>Mentorship networks connecting students with industry professionals</li>
        <li>Digital literacy initiatives</li>
        <li>College preparation workshops</li>
        <li>Career readiness programs</li>
      </ul>

      <h2>Student Success Stories</h2>

      <p>Among our 500 supported students, we've witnessed incredible achievements. Maria Rodriguez, one of our scholarship recipients, recently won first place at the National High School Science Fair. James Thompson, who participated in our mentorship program, is now studying computer science at MIT on a full scholarship.</p>

      <p>These success stories fuel our passion and remind us why this work is so important. Every student we support has the potential to make a significant impact in their community and beyond.</p>

      <h2>Looking Ahead</h2>

      <p>As we celebrate this milestone, we're also looking toward the future. Our goal is to support 1,000 students by 2025, and we're already working on expanding our programs to reach more communities in need.</p>

      <p>We're launching new initiatives including:</p>
      <ul>
        <li>Rural outreach programs</li>
        <li>Advanced STEM laboratories</li>
        <li>International student exchange programs</li>
        <li>Alumni mentorship networks</li>
      </ul>

      <p>None of this would be possible without the continued support of our donors, volunteers, and community partners. Together, we're not just changing individual lives – we're building stronger, more educated communities for the future.</p>
    `,
    author: 'Sarah Williams',
    authorTitle: 'Executive Director',
    date: '2024-02-15',
    category: 'Milestone',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read'
  };

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
                <Link to="/news" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  News
                </Link>
              </li>
              <li>
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-gray-900 dark:text-white font-medium">
                Article
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
              <span className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">
                {articleData.category}
              </span>
              <span>{formatDate(articleData.date)}</span>
              <span>{articleData.readTime}</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {articleData.title}
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {articleData.author}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {articleData.authorTitle}
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={articleData.image}
              alt={articleData.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: articleData.content }}
          />

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Share this article
            </h3>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="STEM Program"
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                New STEM Program Launches
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Our latest STEM education program has attracted 150 students in its first semester.
              </p>
              <Link to="/news/new-stem-program-launches" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                Read More →
              </Link>
            </article>
            
            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Student Success"
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                Student Wins Science Fair
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Maria Rodriguez takes first place at the National High School Science Fair.
              </p>
              <Link to="/news/student-wins-science-fair" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                Read More →
              </Link>
            </article>
            
            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Partnership"
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                New Tech Partnerships
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Leading technology companies join our mentorship program.
              </p>
              <Link to="/news/new-tech-partnerships" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                Read More →
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;