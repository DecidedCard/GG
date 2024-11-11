const handleError = (errorMessage: string, error: unknown) => {
  console.error(errorMessage, error);
  return Promise.reject(new Error(errorMessage));
};

export default handleError;
