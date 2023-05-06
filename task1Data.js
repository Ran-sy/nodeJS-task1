const fs = require("fs");

const addPerson = (id, fname, lname, age, city) => {
  const allData = loadInfo();

  const dublicateData = allData.filter((data) => {
    return data.id === id;
  });
  if (dublicateData.length === 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });
    saveAllData(allData);
  } else {
    console.log("error dublicated data");
  }
};

const deletePerson = (id) => {
  const allData = loadInfo();
  const dataToKeep = allData.filter((data) => {
    return id !== data.id;
  });
  saveAllData(dataToKeep);
  console.log("You have deleted the item with the id", id);
};

const readPerson = (id) => {
  const allData = loadInfo();
  const dataToRead = allData.find((data) => {
    return id === data.id;
  });
  if (dataToRead) console.log(dataToRead);
  else console.log("there is no element with the id " + id);
};

const listData = () => {
  const allData = loadInfo();
  allData.forEach(data => {
    console.log(data.fname + " " + data.age + " " + data.city)
  });
};

const sortByName = () => {
  const allData = loadInfo();
  const sortedData = allData.sort((a, b) => {
    if (a.fname > b.fname) return 1;
    else return -1;
  });
  const listedData = sortedData.map((data) => {
    return `name: ${data.fname} ${data.lname}, age: ${data.age}, city: ${data.city}, id: ${data.id}`;
  });
  console.log(listedData);
};

////////////////////////////////////////////////////////////

const loadInfo = () => {
  try {
    allData = fs.readFileSync("task1Data.json").toString();
    return JSON.parse(allData);
  } catch (e) {
    return [];
  }
};
const saveAllData = (allData) => {
  allDataJson = JSON.stringify(allData);
  fs.writeFileSync("task1Data.json", allDataJson);
};
module.exports = {
  addPerson,
  deletePerson,
  readPerson,
  listData,
  sortByName,
};
