import fs from 'node:fs'

export function init() {
    fs.writeFileSync('./key', 'key-log init.')
}
