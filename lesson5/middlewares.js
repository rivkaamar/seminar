export const descriptionExists = (req, res, next) => {
    const { description } = req.body
    // מידלוור חייב להעביר למידלוור הבא או לסיים את הקריאה
    if (!description) {
        return res.json({ error: 'description is required!' })
    }
    next()
}

export const validDescription = (req, res, next) => {
    const { description } = req.body
    if (!description) {
        return next()
    }
    if (description.length < 3 || description.length > 50) {
        return res.json({ error: 'invalid description!' })
    }
    next()
}
