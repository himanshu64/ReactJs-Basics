import React from "react";
export class Home extends React.Component{
	render(){
var text = "something";
		return(

			<div>
			<p>I am a New Component</p>
			<p>{text}</p>
			<p>Your name is {this.props.name} , your age is {this.props.age}</p>
			<p>User Object => Name: {this.props.user.name}</p>
			<div>
			<h4>Hobbies</h4>
			<ul>
			<li>{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}</li>
			</ul>
			</div>
			<hr/>
			{this.props.children}
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age:  React.PropTypes.number,
	user: React.PropTypes.object,
	children:React.PropTypes.element.isRequired
};