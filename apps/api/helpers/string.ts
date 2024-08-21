/*
 * Generate a simple ID using a random string
 * (i.e. f5d64pv00vw)
 *
 */
export const generateHashID = () => {
  return Math.random().toString(36).slice(2);
}