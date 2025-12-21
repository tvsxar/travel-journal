const Travel = require('../models/travelModel');
const uploadToCloudinary = require('../utils/uploadToCloudinary');

// Create a new travel story
async function createTravel(req, res) {
    try {
        const { title, story, visitedLocation, imageUrl, visitedDate } = req.body;

        if (!title || !story || !visitedDate || !visitedLocation) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'Image file is required' });
        }

        const image = await uploadToCloudinary(req.file.buffer);

        const newTravel = await Travel.create({
            title,
            story,
            visitedLocation,
            userId: req.user._id,
            imageUrl: image.secure_url,
            visitedDate: new Date(visitedDate)
        })

        res.status(201).json({ message: 'Travel story created successfully', travel: newTravel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error during travel creation' });
    }
}

// Get all travel stories for user
async function getTravelsByUser(req, res) {
    try {
        const travels = await Travel.find({ userId: req.user._id }).sort({ isFavourite: -1,createdAt: -1 });

        res.status(200).json({ message: 'Travels fetched successfully', travels });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error during fetching travels' });
    }
}

// Get a specific travel story by ID
async function getTravelById(req, res) {
    try {
        const travel = await Travel.findById(req.params.id);

        if (!travel) {
            return res.status(404).json({ message: 'Travel story not found' });
        }

        res.status(200).json({ message: 'Travel fetched successfully', travel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error during fetching travel' });
    }
}

// Update a travel story by ID
async function updateTravelById(req, res) {
    try {
        const travel = await Travel.findById(req.params.id);

        if(!travel) {
            return res.status(404).json({ message: "Travel story not found" });
        }

        if(req.user._id.toString() !== travel.userId.toString()) {
            return res.status(403).json({ message: "Unauthorized to update this travel story" });
        }

        const { title, story, visitedLocation, visitedDate, isFavourite } = req.body;

        if (req.file) {
            const image = await uploadToCloudinary(req.file.buffer);
            travel.imageUrl = image.secure_url;
        }

        travel.title = title || travel.title;
        travel.story = story || travel.story;
        travel.visitedLocation = visitedLocation || travel.visitedLocation;
        travel.visitedDate = visitedDate ? new Date(visitedDate) : travel.visitedDate;
        travel.isFavourite = travel.isFavourite === isFavourite ? travel.isFavourite : isFavourite;

        await travel.save();

        res.status(200).json({ message: "Travel story updated successfully", travel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error during updating travel" });
    }
}

// Delete a travel story by ID
async function deleteTravelById(req, res) {
    try {
        const deletedTravel = await Travel.findByIdAndDelete(req.params.id);

        // If no travel found
        if (!deletedTravel) {
            return res.status(404).json({ message: 'Travel story not found' });
        }

        res.status(200).json({ message: 'Travel story deleted successfully', travel: deletedTravel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error during deleting travel' });
    }
}

module.exports = {
    createTravel,
    getTravelsByUser,
    getTravelById,
    updateTravelById,
    deleteTravelById
}