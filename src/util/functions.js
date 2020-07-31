export const mutateMessage = (preview) => {
  if (preview.length > 82) {
    // Convert preview message into array
    preview = preview.split('');
    // Get chunk of array
    preview = preview.slice(0, 85);
    // Reference last index
    let lastIndex = preview.length;
    preview[lastIndex] = '...';
    // Convert array to string
    preview = preview.join('');
  }
  return preview;
};
