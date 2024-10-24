// ImagePaths.tsx

export const getImagePathForGame = (gameName: string): string => {
  // Remove non-alphanumeric characters (except underscores and spaces)
  const clearGameName = gameName.replace(/[^a-zA-Z0-9\s]/g, '');
  // Replace spaces with underscores and convert to lowercase for the file name
  const fileName = clearGameName.replace(/\s+/g, '_').toLowerCase();
  // Return the path using the standardized file name
  return `/logos/${fileName}_logo.png`;
};