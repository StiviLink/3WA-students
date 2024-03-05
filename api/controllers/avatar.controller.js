const avatars = [
    {
        id: 1,
        name: 'Ori',
        description: 'Un fort caractère'
    },
    {
        id: 2,
        name: 'Light',
        description: 'Toujours lumineux'
    },
    {
        id: 3,
        name: 'Siri',
        description: 'Il aime bien les IPhones'
    },
    {
        id: 4,
        name: 'Kay',
        description: 'Trop discret'
    }
]

export const getAvatars = ((req, res) => res.json(avatars))
export const viewAvatars = ((req, res) => res.render('pages/index', {avatars}))
export const viewNewAvatar = ((req, res) => res.render('pages/addAvatar'))
export const viewUpdateAvatar = ((req, res) => {
    const { id } = req.params
    const avatar = avatars.find(avatar => avatar.id === parseInt(id))
    res.render('pages/updateAvatar', {avatar})
})
export const getOneAvatar = ((req, res) => res.json(avatars.find(av => av.id === parseInt(req.params.id))))
export const addAvatar = ((req, res) => {
    const { name, description } = req.body
    if(!name || !description) res.json(`Un nom et une description sont requis`)
    else {
        avatars.push({
            id: (avatars[avatars.length - 1]?.id || 0) + 1,
            name,
            description
        })
        res.render('pages/index', {avatars})
    }
})
export const deleteAvatar = ((req, res) => {
    const { id } = req.params
    const avatarFound = avatars.find(avatar => avatar.id === parseInt(id))
    if(avatarFound) avatars.splice(avatars.indexOf(avatarFound), 1)
    else res.json(`Avatar inexistant`)
    res.render('pages/index', {avatars})
})
export const updateAvatar = ((req, res) => {
    const { id } = req.params
    const { name, description } = req.body
    const avatarFound = avatars.find(avatar => avatar.id === parseInt(id))
    if(!avatarFound) res.json(`Avatar inexistant`)
    else {
        if(name) avatarFound.name = name
        if(description) avatarFound.description = description
        res.render('pages/index', {avatars})
    }
})