console.log(window.location)
const editPostHandler = async (event) => {
    console.log("calledFunction")
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#post').value.trim();
    const id =  document.querySelector('#id').innerHTML;

  
    if (title && post) {
      const response = await fetch(`/project/${id}`, {
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
  
$("#editPost").click(function()
{
    console.log("clicked")
    editPostHandler()
})