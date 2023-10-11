import { useEffect, useState } from 'react';
import Card from '../common/Card'
import ReactLoading from 'react-loading'

function bring(tr){
  return <Card 
  key={tr.guid}
  type={tr.pubDate}
  img={tr.thumbnail}
  info={tr.title}
  link={tr.link}
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
      {(articles.length==0)?<ReactLoading type="bars" color="black" height={'50px'} width={'50px'} />:articles.map(bring)}
      </div>
    </>
  );
};

export default Articles;
