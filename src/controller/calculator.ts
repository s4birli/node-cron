import dayjs from 'dayjs'
import Big from 'big.js'
import { getVariable, setVariable } from "../config/default"
import logger from '../utils/logger'
import setter from '../utils/setter'

const calculate = () => {
    try {
        // read variable from .env file
        let peccalaValue: any = getVariable();

        // do the calculation
        peccalaValue = Big((+peccalaValue * 2 + 1.5) / 7.5);

        // update the env file
        setter("peccalaValue", peccalaValue);

        // log the new value
        logger.log('info', { updated: dayjs().format(), value: peccalaValue });
        
        // set variable from progress.env
        setVariable(peccalaValue)

        // return new value
        return peccalaValue;
    }
    catch (err) {
        logger.error(err);
    }
}

export default calculate;