import { useEffect, useState } from 'react';
import Card from '../common/Card'

function bring(tr){
  return <Card 
  key={tr.guid}
  type={tr.pubDate}
  img={tr.thumbnail}
  info={tr.title}
  />
}

const Articles = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@contactsushil');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.items)
        setArticles(data.items);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    
    fetchArticles();
  }, []);

  return (
    <>
    <div className="articles">
      {articles.map(bring)}
      </div>
    </>
  );
};

export default Articles;
