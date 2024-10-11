import { useEffect, useState } from 'react';
import Card from '../common/Card';
import { thumb } from "../../../data/index";
import ReactLoading from 'react-loading';

function bring(tr) {
  return (
    <Card
      key={tr.guid}
      type={tr.pubDate}
      img={tr.src}
      info={tr.title}
      link={tr.link}
    />
  );
}

const Articles = () => {
  return (
    <div className="articles flex flex-wrap justify-center gap-4 p-4">
      {thumb.map(bring)}
    </div>
  );
};

export default Articles;
