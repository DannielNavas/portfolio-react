const API = 'https://api.github.com/users/';

export async function getAllProjects() {
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }
  try {
    const dataGisthub = await fetch(`${API}DannielNavas/repos`,
      headers);
    const data = await dataGisthub.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
