import * as process from 'process';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {config} from 'dotenv';

const start = async () => {
    try {
        config();
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);

        app.enableCors({
            origin: "*",
            credentials: true,
            methods: ['OPTIONS', 'GET', 'POST', 'DELETE', 'PUT'],
            allowedHeaders: ['Content-Type', 'Depth', 'User-Agent', 'X-File-Size', 'X-Requested-With', 'If-Modified-Since', 'X-File-Name', 'Cache-Control'],
            preflightContinue: true
        });

        await app.listen(PORT, () => {
            console.log(`server starts on PORT ${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
};

start();
