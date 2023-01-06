const API = 'https://dev.to/api/articles?username=dannieldev';
export async function getAllArticles() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }

}
