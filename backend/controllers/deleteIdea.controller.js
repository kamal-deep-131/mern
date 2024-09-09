import Idea from '../model/idea.model.js'

const deleteIdea = async (req, res) => {
    try {
        const { id } = req.params
        const { author } = req.body

        const idea = await Idea.findById(id)
        console.log(idea)

        if (!idea) {
            return res.status(404).json({
                success: false,
                message: "Idea not found"
            });
        }

        if (String(idea.author) !== author) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this idea"
            });
        }

        await Idea.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Idea deleted successfully",
            idea
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

export default deleteIdea