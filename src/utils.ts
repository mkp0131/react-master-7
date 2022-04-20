export const makeImagePath = (file: string, size: string = 'w1280') => {
  return `https://image.tmdb.org/t/p/${size}${file}`;
};
