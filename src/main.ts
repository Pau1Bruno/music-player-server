import * as process from 'process';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {config} from 'dotenv';

const start = async () => {
    try {
        config();
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);

        app.use((_, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
            next();
        });

        app.enableCors({
            allowedHeaders:"*",
            origin: "*"
        });

        await app.listen(PORT, () => {
            console.log(`server starts on PORT ${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
};

start();
