export const makeImagePath = (file: string, size: string = 'w1280') => {
  if (!file) {
    return 'img/no_thumnail.png';
  } else {
    return `https://image.tmdb.org/t/p/${size}${file}`;
  }
};
