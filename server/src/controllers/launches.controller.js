const { 
    getAllLaunches, 
    addNewLaunch, 
    existsLaunchWithId,
    abortLaunchById
} = require('../models/launches.model');

function httpGetAllLaunches(req, res){
    return res
            .status(200)
            .json(getAllLaunches());
}

function isValidLaunch(launch){
    return (launch.mission && launch.rocket && launch.launchDate && launch.target);
}

function httpAddNewLaunch(req, res){
    const launch = req.body;
    
    if(isValidLaunch(launch)){
        launch.launchDate = new Date(launch.launchDate);
        if(isNaN(launch.launchDate)){
            return res.status(400).json({
                error: 'Invalid launch date'
            });
        }

        addNewLaunch(launch);
        return res.status(200).json(launch);
    }

    return res.status(400).json({
        error: 'Missing required launch property'
    });

}

function httpAbortLaunch(req, res){
    const launchId = Number(req.params.id);
    if(!existsLaunchWithId(launchId)){
        return res.status(404).json({
            message: "Launch not found"
        });
    }

    return res.status(200).json(abortLaunchById(launchId));
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}