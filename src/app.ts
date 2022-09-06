import express from 'express';

import routes from './app/routes';

export default class App {
    express = express();
    constructor() {
        this.database();
        this.middlewares();
        this.router();
    }

    router(): void {
        routes(this.express);
    }

    database(): void {

    }

    middlewares(): void {
        this.express.use(express.json());
    }
}
