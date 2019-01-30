import React, { Component } from "react";
import { Button } from "semantic-ui-react";
export default class Nav extends Component {
	state = {
		userInfo: {}
	};
	// async componentDidMount() {
	// 	await this.props.getUser();
	// 	const { authID } = this.props.user;
	// 	axios
	// 		.get(`/api/user/info/${authID}`)
	// 		.then(response =>
	// 			this.setState({ userInfo: { ...response.data, authID } })
	// 		);
	// }

	render() {
		return (
			<div>
				{" "}
				<div style={{ marginRight: "20%", height: "52%" }}>
					<a href={process.env.REACT_APP_LOGIN}>
						<Button
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-around",
								alignItems: "center",
								backgroundColor: "#031424",
								border: "solid #031424 4px",
								color: "white",
								width: "100%",
								height: "100%",
								fontSize: "1em"
							}}
						>
							Log In
						</Button>
					</a>
				</div>
			</div>
		);
	}
}
