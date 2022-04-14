export const postData =  async() => {
  try {
    const a = fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await a.json();
    
  } catch (error) {
    
  }
}