console.clear();

const getNameAsync = async (idPost) => {
  try {
    /* Here is going to GET the response from
    the API 
    
    The fetch is going to return us a promise so
    we need to transform the data to as json.

    */

    const responsePost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );

    /* Important to put the await's due to
    this is an asynchronous execution
    
    This is the data retrieved. */

    const post = await responsePost.json();

    const responseUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );

    const user = await responseUser.json();

    console.log(post);
    console.log(
      `The User that made the post was:\n\nName: ${user.name}\nEmail: ${user.email}\nCity: ${user.address.city}`
    );
  } catch (error) {
    console.log(error);
  }
};

getNameAsync(1);
