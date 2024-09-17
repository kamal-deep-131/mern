import Idea from '../model/idea.model.js'

const displaySingleData = async (req, res) => {
    try {
        const idea = await Idea.findById({ _id: req.params.id }).populate('author', '-password')
        if (!idea) {
            return res.status(404).json({ success: false, message: "Idea not found" })
        }

        res.status(200).json({ success: true, message: "Idea fetched successfully", idea })

    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong" })
    }
}

export default displaySingleData