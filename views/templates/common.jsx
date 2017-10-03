class BlogShowCase extends React.Component {
      render() {
      	       return (
	       	      <div>
			<h3> {this.props.latest_blog_entry.title} | {this.props.latest_blog_entry.entry_date} </h3>
			<img src={this.props.latest_blog_entry.image_url} alt=""/>
			<p>{this.props.latest_blog_entry.description}</p>
		      </div>
		)
      }
}
