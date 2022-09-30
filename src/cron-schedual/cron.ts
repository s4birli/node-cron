import cron from 'node-cron'
import dayjs from 'dayjs'
import calculate from '../controller/calculator'

const schedule = () => {    
    cron.schedule('*/2 * * * *', async () => {
        const value = await calculate();
        console.log(`new value is: ${value} at ${dayjs().format()}`)
    })
}

export default schedule;
