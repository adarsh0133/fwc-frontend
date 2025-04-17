const MAX_FILE_SIZE_MB = 1;

export const isFileSizeValid = (file, maxSizeMB = MAX_FILE_SIZE_MB) => {
  if (!file) return true; // No file selected yet
  const sizeInMB = file.size / (1024 * 1024); // Convert bytes to MB
  return sizeInMB <= maxSizeMB;
};

export const getFileSizeError = (file, maxSizeMB = MAX_FILE_SIZE_MB) => {
  if (!file) return null;
  const sizeInMB = file.size / (1024 * 1024);
  if (sizeInMB > maxSizeMB) {
    return `File size should not exceed ${maxSizeMB}MB. Your file is ${sizeInMB.toFixed(2)}MB.`;
  }
  return null;
};