const { getAllLaunches, addNewLaunch } = require('../models/launches.model');

function httpGetAllLaunches(req, res){
    return res
            .status(200)
            .json(getAllLaunches());
}

function isValidLaunch(launch){
    return (launch.mission && launch.rocket && launch.launchDate && launch.destination);
}

function httpAddNewLaunch(req, res){
    const launch = req.body;
    
    if(isValidLaunch(launch)){
        launch.launchDate = new Date(launch.launchDate);

        addNewLaunch(launch);
        return res.status(200).json(launch);
    }

    return res.status(400).json();

}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
}