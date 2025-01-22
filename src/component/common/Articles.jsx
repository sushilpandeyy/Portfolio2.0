import { useEffect, useState } from 'react';
import Card from '../common/Card';
import { thumb } from "../../../data/index";
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';

const ArticleCard = ({ guid, pubDate, src, title, link }) => (
  <Card
    key={guid}
    type={pubDate}
    img={src}
    info={title}
    link={link}
  />
);

const Articles = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full rounded-xl shadow-lg transition-colors duration-300
      ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}>
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className={`text-2xl font-bold transition-colors duration-300
              ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              Latest Articles
            </h2>
            <div className={`h-px flex-grow transition-colors duration-300
              ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
          </div>
        </div>

        {isLoading ? (
          // Loading State
          <div className="flex justify-center items-center min-h-[200px]">
            <ReactLoading
              type="bubbles"
              color={isDark ? '#4B5563' : '#9CA3AF'}
              height={50}
              width={50}
            />
          </div>
        ) : (
          // Articles Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thumb.map((article) => (
              <div key={article.guid} className="flex justify-center">
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && thumb.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg transition-colors duration-300
              ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No articles available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;