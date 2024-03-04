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
export const getOneAvatar = ((req, res) => res.json(avatars.find(av => av.id === parseInt(req.params.id))))
export const addAvatar = ((req, res) => {
    const { name, description } = req.body
    let avatar
    if(!name || !description) avatar = `Un nom et une description sont requis`
    else {
        avatar = {
            id: (avatars[avatars.length - 1]?.id || 0) + 1,
            name,
            description
        }
        avatars.push(avatar)
    }
    res.json(avatar)
})
export const deleteAvatar = ((req, res) => {
    const { id } = req.params
    let result = `Avatar supprimé avec succès`
    const avatarFound = avatars.find(avatar => avatar.id === parseInt(id))
    if(avatarFound) avatars.splice(avatars.indexOf(avatarFound), 1)
    else result = `Avatar inexistant`
    res.json(result)
})
export const updateAvatar = ((req, res) => {
    const { id } = req.params
    const { name, description } = req.body
    const avatarFound = avatars.find(avatar => avatar.id === parseInt(id))
    let avatar
    if(!avatarFound) avatar = `Avatar inexistant`
    else {
        if(name) avatarFound.name = name
        if(description) avatarFound.description = name
        avatar = avatarFound
    }
    res.json(avatar)
})