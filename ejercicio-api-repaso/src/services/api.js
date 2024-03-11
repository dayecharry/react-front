const getDataHouse = async (house) => {
  const dataJson = await fetch(
    `https://hp-api.onrender.com/api/characters/house/${house}`
  );
  const characters = await dataJson.json();
  return characters;
};

const api = {
  getDataHouse,
};

export default api;
