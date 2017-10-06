function get_url_async(url) {
  return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function(){
            console.log(req);
            if (req.status === 200) {
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        }
        req.onerror = function() {
            reject(Error('Network Error!'));
        }

        req.send();
  });
}

class BlogShowCase extends React.Component {
      render() {
            return (
       	<div>
      		<h3> {this.props.latest_blog_entry.title} | {this.props.latest_blog_entry.entry_date} </h3>
      		<img src={this.props.latest_blog_entry.image_url} alt="" />
		    <p>{this.props.latest_blog_entry.description}</p>
	      </div>
		)
      }
}


class BlogList extends React.Component {
      renderBlogPost(post_detail) {
           return <BlogPost post_detail={post_detail}/>
      }
      render() {
            var blogposts = [];
            for (var i = 0; i < this.props.blog_list.length; i++) {
                blogposts.push(<BlogPost post_detail={this.props.blog_list[i]}/>)
            }
          return (<ul> {blogposts} </ul>)
      }
}


class BlogPost extends React.Component {
      render () {
      	     return (<li> {this.props.post_detail.title} </li>)
      }
}