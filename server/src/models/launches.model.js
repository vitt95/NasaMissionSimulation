const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
};

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ["ZTM", "NASA"],
            flightNumber: latestFlightNumber,
        }),

    );
}

function getAllLaunches(){
    return Array.from(launches.values());
}

function existsLaunchWithId(launchId){
    return launches.has(launchId); 
}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    console.log(aborted);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}
