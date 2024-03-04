import { addAvatar, deleteAvatar, getOneAvatar, getAvatars, updateAvatar} from '../controllers/avatar.controller.js'

const avatarRoute = (app => {
    app.get('/avatars', getAvatars)
    app.get('/avatars/:id', getOneAvatar)
    app.post('/avatars', addAvatar)
    app.patch('/avatars/:id', updateAvatar)
    app.delete('/avatars/:id', deleteAvatar)
})

export default avatarRoute