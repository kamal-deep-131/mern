import Idea from '../model/idea.model.js'

const createIdea = async (req, res) => {
    //take inputs
    const { title, description, author } = req.body

    //check all fields
    if (!title || !description || !author) {
        return res.status(400).json({
            success: false,
            message: "Please enter all fields"
        })
    }

    //create new idea
    const newIdea = new Idea({
        title,
        description,
        author
    })

    //save idea
    await newIdea.save()

    //response
    return res.status(200).json({
        success: true,
        message: "Idea created successfully",
        idea: newIdea
    })

}

export default createIdea