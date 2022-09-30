import winston from 'winston'
import CSV from 'winston-csv-format';
import fs from 'fs'
import path from 'path'

const csvHeaders = {
    updated: 'Updated Date and Time',
    value: 'Value'
};

const logger = winston.createLogger({
    level: 'info',
    format: CSV(['updated', 'value'], { delimiter: ';' }),
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: "logger.csv",
            format: CSV(['updated', 'value'], { delimiter: ';' })
        }),
        new winston.transports.File({
            level: 'error',
            filename: "error.log",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json())
        }),
    ]
})

const file_path = path.resolve(__dirname, '../../logger.csv')
if (!fs.existsSync(file_path)) {
    logger.log('info', csvHeaders);
}

export default logger;