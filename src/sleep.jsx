export const sleep = async (awaitInSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, awaitInSeconds * 1500));
};

export default sleep;
