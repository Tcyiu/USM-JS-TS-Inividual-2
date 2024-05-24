export default async function getRandomActivity() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex].title; // возврат текста активности
  } catch (error) {
      console.error('Error:', error);
      return 'Sorry, there was an error';
  }
}