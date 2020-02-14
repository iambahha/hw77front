import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchComments, publishComment} from "../../store/actions";
import ForumForm from "../../components/ForumForm/ForumForm";

import './Forum.css';

class Forum extends Component {
	componentDidMount() {
		this.props.fetchComments();
	};

	render() {
		if (!this.props.comments) {
			return <div>Loading...</div>
		}

		return (
			<Fragment>
				<ul>
					{this.props.comments.map(item => {
						let image = null;
						if (item.image && item.image !== "null") {
							image = <img src={'http://localhost:8000/uploads/' + item.image} alt={item.author} className="comment-image" />;
						}
						return <li key={item.id} className="comment">
							{image}
							<div>
								<h6 className="comment-author">Author: {item.author || 'Anonymous'}</h6>
								<p className="comment-message">Message: {item.message}</p>
							</div>
						</li>
					})
					}
				</ul>

				<ForumForm submit={this.props.publishComment} />
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		comments: state.comments
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchComments: () => dispatch(fetchComments()),
		publishComment: (data) => dispatch(publishComment(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Forum);