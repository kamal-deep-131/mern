import Idea from '../model/idea.model.js';
const updateIdea = async (req, res) => {
    const { id } = req.params;
    const { title, description, author } = req.body;

    // Check all fields
    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: "Title and description are required"
        });
    }

    try {
        // Check if the idea exists
        const idea = await Idea.findById(id);
        if (!idea) {
            return res.status(404).json({
                success: false,
                message: "Idea not found"
            });
        }

        // Check if the author is the one updating the idea
        if (String(idea.author) !== author) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to edit this idea"
            });
        }

        // Update the idea
        const updatedIdea = await Idea.findByIdAndUpdate(
            id,
            { title, description },
            { new: true, runValidators: true }
        );

        return res.status(200).json({
            success: true,
            message: "Idea updated successfully",
            idea: updatedIdea
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

export default updateIdea