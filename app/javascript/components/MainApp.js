import React from "react"
import PropTypes from "prop-types"
import{
  Col,
  Container,
  Row,
  Button,
  Nav
} from 'react-bootstrap'


class MainApp extends React.Component {
  render () {
    const{
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
        <Container>
        <div>
          <h1>Welcome!</h1>
       <React.Fragment>
          <div className="Nav-log">
           {logged_in &&
             <div>
               <a href={sign_out_route}>Sign Out</a>
               </div>
             }
             {!logged_in &&
               <div>
               <a href={sign_in_route}>Sign In</a>
               </div>
             }
           </div>

           </ React.Fragment>
        </div>

        </Container>
    );
  }
}

export default MainApp
