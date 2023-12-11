import * as process from 'process';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {config} from 'dotenv';
import cors from 'cors';

const start = async () => {
    try {
        config();
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);

        app.use(cors({
            credentials: true,
            origin: true
        }))

        await app.listen(PORT, () => {
            console.log(`server starts on PORT ${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
};

start();
