import express from 'express';

export default class App {
    express = express();
    constructor() {
        this.database();
        this.middlewares();
        this.router();
    }

    router(): void {

    }

    database(): void {

    }

    middlewares(): void {

    }
}
