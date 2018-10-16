

let data = [
	{id: 1, author: "Pete Hunt", text: "This is one comment"},
	{id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

// class Comment extends React.Component {
// 	render() {
// 		return (
// 			<div className="comments">
// 				<h2 className="commentAuthor">
// 					{this.props.author}
// 				</h2>
// 			</div>	
// 		);
// 	}
// }
function rawMarkup(markupText) {

	var md = new Remarkable();
	var rawMarkup = md.render(markupText);
	return { __html: rawMarkup}
}


function Comment(props) {
	return (
		<div className="comments">
			<h2 className="commentAuthor">
				{props.author}
			</h2>
			<span dangerouslySetInnerHTML={rawMarkup(props.children.toString())} />
		</div>
	);
}

class CommentList extends React.Component {
	render() {
		let commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		})
		return (	
			<div className="CommentList">
				{commentNodes}
			</div>
		);
	}
}


class CommentForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {author: '', text: ''};
	}

	// One of the method to bind 'this' to method, using () => 
	handleAuthorChange = (e) => {
		this.setState({author: e.target.value});
	}

	handleTextChange = (e) => {
		this.setState({text: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let author = this.state.author.trim();
		let text = this.state.text.trim();	
		if(!text || !author) {
			return;
		}

		this.props.onCommentSubmit({author, text});
		this.setState({author: '', text: ''});
	}

	render() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit} >
				<input 
				  type="text"
				  placeholder="Your name"
				  value={this.state.author}
				  onChange={this.handleAuthorChange}
				/>
				<input 
				  type="text"
				  placeholder="Say Something..."
				  value={this.state.text}
				  onChange={this.handleTextChange}
				/>

				<input type="submit" value="Post" />
			</form>
		);
	}
}

class CommentBox extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = { data: []}; // equivalent to getInitialState()

	  // One of the methods to bind to function using contructor for declaration
	  this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	  this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
	}

	// Only supported for React.createClass
	// getInitialState() {
	// 	return {data: [] };
	// }

	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

	handleCommentSubmit(comment) {
		let comments = this.state.data;
		
		comment.id = Date.now();
		let newComments = comments.concat([comment]);
		this.setState({data: newComments});
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({data: comments});
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

	// Life Cycle function: This function is call after render()
	componentDidMount() {
		this.loadCommentsFromServer();
	
		// .bind(this) fixed undefined of "this", () => also fix it.
		// Note: this also work if loadCommentsFromServer = () => {} declared like that.
		// setInterval(() => {this.loadCommentsFromServer()}, this.props.pollInterval);
		// setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
		
	}

	render() {

		return(
			<div className="CommentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
}


ReactDOM.render(
	<CommentBox url="/api/comments" pollInterval={2000} />,
	document.getElementById('content')
);








/* Pre ES6 */
/*




var Comment = React.createClass({

	rawMarkup: function(){
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return { __html: rawMarkup };
	},

	render: function(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
});


var data = [
	{id: 1, author: "Pete Hunt", text: "This is one comment"},
	{id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});

		return(
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});


var CommentForm = React.createClass({
	getInitialState: function() {
		return {author: '', text: ''};
	},
	handleAuthorChange: function(e) {
		this.setState({author: e.target.value});
	},
	handleTextChange: function(e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		console.log(e);
		if(!text || !author) {
			return;
		}
		this.props.onCommentSubmit({author: author, text: text});
		this.setState({author: '', text: ''});
	},
	render: function(){
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input 
				type="text"
				  placeholder="Your name"
				  value={this.state.author}
				  onChange={this.handleAuthorChange}
				/>
				<input 
				  type="text"
				  placeholder="Say something..."
				  value={this.state.text}
				  onChange={this.handleTextChange}
				/>
				<input type="submit" value="Post" />
			</form>
			// <div className="commentForm">
			// 	Party Parrot time. I am a CommentForm.
			// </div>
		);
	}
});

var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	handleCommentSubmit: function(comment) {
		var comments = this.state.data;
		// Optimistically set an id on the new comment. It will be replaced an
		// id generated by the server. In a production application you would likely
		// not use Date.now() for this and would have a more rebust system in place.
		comment.id = Date.now();
		var newComments = comments.concat([comment]);
		this.setState({data: newComments});
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({data: comments});
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []}
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		
		return (
			<div className="CommentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});



// class CommentBox extends React.Component {
// 	render() {
// 		return(
// 			<div className="CommentBox">
// 				We created a React div component! WOO!
// 			</div>
// 		);
// 	}
// }
 

ReactDOM.render(
	<CommentBox url="/api/comments" pollInterval={2000} />,
	document.getElementById('content')
);
 */