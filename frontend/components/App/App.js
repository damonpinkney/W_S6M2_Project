/*
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

import Searchbar from '../Searchbar/SearchBar'
import Posts from '../Posts/Posts'
// Import the state hook
import React, {useState} from 'react';
import data from '../../data/dummy-data'


// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData

const App = () => {
  const [posts, setPosts] = useState(data)
  
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = postId => {

    setPosts(posts.map(post=> {
      if(post.id !== postId) return post
      let updatedPost = { ...post, likes: post.likes + 1 }
      return updatedPost  
    }))
    
    
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Hints: Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
  };

  return (
    <div className='App'>
     <Searchbar />
      
      {< Posts likePost={likePost} posts={posts} />/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
