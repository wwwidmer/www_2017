$(function(){
    $('.navbar-nav li a').each(function(){
      if ($(this).prop('href') == window.location.href) {
          $(this).parent().addClass('active');
      }
    });
});


function get_url_async(url) {
  return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function(){
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
        		<a href="/blog"> <h3> {this.props.latest_blog_entry.title} | {this.props.latest_blog_entry.timestamp.split('T')[0]} </h3></a>
        		<img src={this.props.latest_blog_entry.image_url} alt="" />
  		    <p>{this.props.latest_blog_entry.description}</p>
  	      </div>
  		)}
}


class BlogList extends React.Component {
      renderBlogPost(post_detail) {
           return <BlogPost post_detail={post_detail}/>
      }
      render() {
            var blogposts = [];
            for (var i=this.props.blog_list.length-1; i >= 0 ; i--) {
                blogposts.push(<BlogPost key={i} post_detail={this.props.blog_list[i]}/>)
            }
          return (<ul class="list-group"> {blogposts} </ul>)
      }
}


class BlogPost extends React.Component {
      render () {
      	     return (
                <a class="list-group-item" href={"/blog/" + this.props.post_detail.id}>
                    <div class="d-flex w-100 justify-content-between">
                    <h4> {this.props.post_detail.title} </h4>
                    <small> {this.props.post_detail.timestamp.split('T')[0]} </small>
                  </div>
                <p class="mb-1">{this.props.post_detail.description}</p>
                </a>)
      }
}