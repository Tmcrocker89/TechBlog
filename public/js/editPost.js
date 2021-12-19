console.log(window.location)
const editPostHandler = async (event) => {
    console.log("calledFunction")
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#post').value.trim();
    const id =  document.querySelector('#id').innerHTML;

  
    if (title && post) {
      const response = await fetch(`/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
$("#editPost").click(function()
{
    console.log("clicked")
    editPostHandler()
})

document
  .querySelector('.del-btn')
  .addEventListener('click', delButtonHandler);