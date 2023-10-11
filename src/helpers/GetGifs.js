export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=fBtNoKiivyqTNkX0uUT4fLiapCoF6sgH&q=${categoria}&limit=10`;
  const response = await fetch(url);

  // desestructurar la data.
  const { data } = await response.json();

  // que me interesa de la data: la url, img
  const gifs = data.map((imagen) => ({
    id: imagen.id,
    titulo: imagen.title,
    url: imagen.images.downsized_medium.url,
  }));
  return gifs;
};
