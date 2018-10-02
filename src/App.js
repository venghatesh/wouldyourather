

import React, {Component} from 'react';
import LoadingBar from 'react-redux-loading-bar'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavTabs from "./components/NavTabs";
import Login from './components/Login'


import AddQuestion from './components/AddQuestion'
import {connect} from 'react-redux'
import {handleInitialData} from "./actions/shared"
import Leaderboard from "./components/Leaderboard"
import QuestionPage from './components/QuestionPage'

import Register from "./components/Register"
import {isEmpty} from "./utils/helpers";

import PrivateRoute from './components/PrivateRoute';
import PageNotFound from './components/PageNotFound'
import AddButton from './components/ui-library/AddButton';
import Nav from './components/Nav';
class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {

        return (
                <Router>
                  <div>
                 <LoadingBar />
                    <Nav />
                    <Link to="/add"><AddButton/> </Link>
                     <Switch>

                     <Route
                          exact
                          path="/login"
                          component={Login}
                        />


                        <Route
                          exact
                          path="/register"
                          component={Register}
                        />
                        <PrivateRoute
                          path="/leaderboard"
                          exact
                          component={Leaderboard}
                        />
                        <PrivateRoute
                          path="/add"
                          exact
                          component={AddQuestion}
                        />


                        <PrivateRoute
                          exact
                          path="/questions/:id/details"
                          component={QuestionPage}
                        />
                        <PrivateRoute
                          exact
                          path="/questions/:id"
                          component={QuestionPage}
                        />

                        <Route
                           exact
                            path="/"
                            component={NavTabs}
                          />
                          <Route
                             exact
                              path="*"
                              component={PageNotFound}
                          />


                      </Switch>
                      </div>
                </Router>

        );
    }
}

function mapStateToProps({questions, users}) {
    return {
        loading: isEmpty(questions) || isEmpty(users)
    }
}

//export default connect()(App);
export default connect(mapStateToProps)(App);
