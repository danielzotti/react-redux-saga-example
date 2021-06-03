const baseUrl = 'https://60b8da9db54b0a0017c04a18.mockapi.io/api/todo';

export function fetchTodoList() {
  return fetch(baseUrl)
    .then(response => response.json());
}
