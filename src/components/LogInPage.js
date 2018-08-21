import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LogInPage = ( { startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>it's time to get your expenses under control</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps  = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LogInPage);

// export class LogInPage extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       loggedIn: false
//     };
//   }
//   onSubmit = (e) => {
//     e.preventDefault();
//     console.log('log in button clicked');
//     this.setState(() => { loggedIn: true});
//     this.props.history.push('/dashboard');
//   };
//   render() {
//     return (
//       <div>
//         <h1>Log In to Expensify</h1>
//         <h5>~ enter your username and password to see your expenses ~</h5>
//         <form onSubmit={this.onSubmit}>
//           <p>
//             <input type="text" placeholder="username" autoFocus></input>
//           </p>
//           <p>
//             <input type="password" placeholder="password"></input>
//           </p>
//           <p>
//             <button>LOG IN</button>
//           </p>
//         </form>
//       </div>
//     );
//   };
// };

// export default LogInPage;