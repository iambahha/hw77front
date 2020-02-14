import React, { Component } from 'react';
import Forum from "./containers/Forum/Forum";
import {Container} from "reactstrap";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Container>
					<Forum />
				</Container>
			</div>
		);
	}
}

export default App;