import Idea from '../model/idea.model.js'

const verifiedOwnerIdeas = async (req, res) => {
    try {
        const { author } = req.body
        const ideas = await Idea.find({ author })

        if (!ideas) {
            return res.status(404).json({
                success: false,
                message: "No ideas found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Ideas fetched successfully",
            ideas
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

export default verifiedOwnerIdeas