const generateRandomId = (index) => {
  return `random_id_${index}_${Math.floor(Math.random() * 1000)}`;
};
export default generateRandomId;
