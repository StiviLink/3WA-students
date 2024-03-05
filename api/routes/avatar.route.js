import {
    addAvatar,
    deleteAvatar,
    getOneAvatar,
    getAvatars,
    updateAvatar,
    viewAvatars,
    viewNewAvatar,
    viewUpdateAvatar
} from '../controllers/avatar.controller.js'

const avatarRoute = (app => {
    app.get('/', viewAvatars)
    app.get('/avatar/update/:id', viewUpdateAvatar)
    app.get('/avatar/remove/:id', deleteAvatar)
    app.get('/avatar/new', viewNewAvatar)
    app.get('/avatars', getAvatars)
    app.get('/avatars/:id', getOneAvatar)
    app.post('/avatars', addAvatar)
    app.post('/update/:id', updateAvatar)
    app.patch('/avatars/:id', updateAvatar)
    app.delete('/avatars/:id', deleteAvatar)
})

export default avatarRoute