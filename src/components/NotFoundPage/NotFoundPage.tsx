import React from 'react';

const NotFoundPage: React.FC<{}> = () => {
  return (
    <div className="text-center">
      <h1 className="text-warning">Page Not Exists</h1>
      <p className="text-warning">404</p>
    </div>
  );
};

export default NotFoundPage;
