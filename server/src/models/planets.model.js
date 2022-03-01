const { parse } = require("csv-parse");
const fs = require("fs");
const path = require('path');

//parse();

const results = [];
const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

/**
 * Loads planets data
 * @returns Promise
 */
function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("end", () => {
        //console.log(`${habitablePlanets.length} habitable planets found!`);
        /*console.log(
          habitablePlanets.map((planet) => {
            return planet["kepler_name"];
          })
        );*/
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      });

      resolve();
  });
}

function getAllPlanets(){
  return habitablePlanets;
}

module.exports = {
  getAllPlanets,
  loadPlanetsData,
};
