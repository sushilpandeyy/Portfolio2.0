import React from 'react';
import { Proj } from '../../../data/index';
import List from '../common/List';

const Projects = () => {
  return (
    <div className="projects-container p-6 space-y-6">
      {/* Pass the Proj array as a prop to the List component */}
      <List items={Proj} />
    </div>
  );
};

export default Projects;
