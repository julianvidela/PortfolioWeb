// import React from 'react';
// import './Background.css'; // Asegúrate de enlazar el archivo CSS

// const Background: React.FC = () => {
//   return (
//     <div className="blur-bg">
//       <div className="blur-circle circle-1"></div>
//       <div className="blur-circle circle-2"></div>
//       <div className="blur-circle circle-3"></div>
//       <div className="blur-circle circle-4"></div>
//     </div>
//   );
// };

// export default Background;

import React from 'react';
import './backGround.css'; 

const Background: React.FC = () => {
  return (
    <div className="background-container">  
      <div className="blur-bg">
        <div className="blur-circle circle-1"></div>
        <div className="blur-circle circle-2"></div>
        <div className="blur-circle circle-3"></div>
        <div className="blur-circle circle-4"></div>
      </div>
    </div>
  );
};

export default Background;
