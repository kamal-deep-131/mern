import Idea from '../model/idea.model.js'

const displayAllIdeas = async (req, res) => {
    const ideas = await Idea.find().populate('author', '-password')
    res.status(200).json({ success: true, message: "All Ideas", ideas })
}

export default displayAllIdeas