import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
  override: true, 
})

const config = {
  port: 12345,
}

const getVariable = () => {
  const peccalaValue = process.env.peccalaValue;
  return peccalaValue ?? '0';
}

const setVariable = (val: string) => {
  process.env.peccalaValue = val;
}

export { config, getVariable, setVariable }