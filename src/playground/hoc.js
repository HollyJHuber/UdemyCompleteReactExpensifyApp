import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1> Information </h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>Warning: private information, please don't share</p> }
      <WrappedComponent { ...props } />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent { ...props} /> 
        ) : (<p>AUTHENTICATION REQUIRED to see Info!</p>
      )}
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="always found on Wikipedia" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="always found on Wikipedia" />, document.getElementById('app'));
