import calculate from './calculator'
import dayjs from 'dayjs'


const runInterval = async () => {
    const value = await calculate();
    console.log(`new value is: ${value} at ${dayjs().format()}`)
}

runInterval();
setInterval(runInterval, 120 * 1000);

export default runInterval;



