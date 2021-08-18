import { comments } from '../../../data/comments'

export default function handler(req, res) {

    switch (req.method) {
        case 'GET':
            res.status(200).json(comments)
            break
        case 'POST':
            const newComment = {
                id: Date.now(),
                text: req.body.comment
            }
            comments.push(newComment)
            res.status(201).json(newComment)
            break
    }
}