import chalk from "chalk"

const values = {
    blue: 'Sofiane',
    red: 'Quentin',
    green: 'Yacine',
    yellow: 'Elisa'
}

Object.entries(values).map(([key, value]) => {
    console.log(chalk[key](value))
})