/*var GroceryList =(props)=>(

	<ul>
{props.lists.map(list=>
<GroceryListItem list={list}/>
	)}
		
</ul>
	);

//**********************

var GroceryListItem = (props) =>{
	var groceryListClick=(e)=>{
		 console.log(e.target.innerText);
	}

return(
		<li onClick={groceryListClick} >{props.list}</li>
);
}

ReactDOM.render(<GroceryList lists={['salad', 'brocoli', 'pasta']}/>, document.getElementById("app"));*/


class GroceryList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul >{this.props.lists.map(element => <GroceryListItem element={element} />)}	</ul>
		);
	}
}

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false
		}
	}


	groceryListClick() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		var style = {
			fontWeight: this.state.done ? 'bold' : 'normal'
		};

		// var style1 = {
		// 	textDecoration: this.state.done ? 'bold':'normal';
		// };

		return (

			//<li style={style} onClick={() => this.groceryListClick()}>{this.props.element}</li>
      <li style={style} onMouseOver ={this.groceryListClick.bind(this)}  >{this.props.element}</li>
		);
	}


}

ReactDOM.render(<GroceryList lists={['salad', 'brocoli', 'pasta']} />, document.getElementById("app"));