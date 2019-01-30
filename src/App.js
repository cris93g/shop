import React, { Component } from "react";
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
// import { Provider } from "react-redux";
// import store from "./redux/store";
class App extends Component {
	render() {
		return (
			// <Provider store={store}>
			<Router>
				<div className="welcome">{routes}</div>
			</Router>
			// </Provider>
		);
	}
}

export default App;
