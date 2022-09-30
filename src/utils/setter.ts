import fs from 'fs'
import os from 'os'
import path from 'path'

const setter = (key: string, value: number) => {
    const file_path = path.resolve(__dirname, '../.env')
    const ENV_VARS = fs.readFileSync(file_path, "utf8").split(os.EOL);
    const val = ENV_VARS.find((line: string) => { return line.match(new RegExp(key)) })
    if (val) {
        const target = ENV_VARS.indexOf(val);
        ENV_VARS.splice(target, 1, `${key}=${value}`);
        fs.writeFileSync(file_path, ENV_VARS.join(os.EOL));
    }
}

export default setter;