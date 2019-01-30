import React, { Component } from "react";
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import { withRouter } from "react-router-dom";
import store from "./redux/store";
import Nav from "./components/Nav/Nav";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="welcome">
						{this.props.location.pathname !== "/" && <Nav />}
						{routes}
					</div>
				</Router>
				//{" "}
			</Provider>
		);
	}
}

export default withRouter(App);
