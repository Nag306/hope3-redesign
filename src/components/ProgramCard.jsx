import { Link } from 'react-router-dom';

const ProgramCard = ({ program }) => {
  return (
    <div className="card group hover:scale-105 transition-transform duration-300">
      <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="flex items-center space-x-2 mb-3">
        <span className="text-2xl">{program.icon}</span>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900 px-2 py-1 rounded-full">
          {program.category}
        </span>
      </div>
      
      <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3">
        {program.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {program.description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{program.duration}</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{program.participants} students</span>
          </span>
        </div>
      </div>
      
      <Link
        to={`/programs/${program.slug}`}
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
      >
        Learn More
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ProgramCard;