import React from "react";
export class Home extends React.Component{
	constructor(props){
		super();
		this.state = {
		age :props.initialAge,
		status:0	
		}
	}
	onMakeOlder(){
		this.setState({
			age:this.state.age + 3
		});
		setTimeout(() =>{
			this.setState({
				status:1
			});
		},3000)
	}

	render(){

		return(

			<div>
			<p>I am a New Component</p>
			
			<p>Your name is {this.props.name} , your age is {this.state.age}</p>
			<p>Status: {this.state.status}</p>
			<hr/>
			<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me Older!</button>
			
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	initialAge:  React.PropTypes.number,
	
};