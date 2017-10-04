class NavigationBar extends React.Component {
    renderMenuItem(href, name){
		return <MenuItem href={href}, name={name} />;
    } 
    render () {
      	return (
	       <nav class="navbar navbar-default navbar-static-top navbar-inverse">				        
	    	   <div class="container"	
		    	<ul class="nav navbar-nav">
			    	{this.renderMenuItem("/", "Home")}
			    	{this.renderMenuItem("/blog", "Blog")}
		    	</ul>
		 		</div>
			</nav>
		)
    }
}

class MenuItem extends React.Component {
    constructor() {
    	super();
 		this.state = {href:"/", name:"Home"}
    }
    render(){
		<li href="{this.state.href}"> {this.state.name} </li>
    }	    
}