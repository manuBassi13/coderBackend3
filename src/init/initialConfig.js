import express from 'express'
import MocksRouter from "../routes/mocks.router.js"
import { __dirname } from "../utils/utils.js"
import {connectionDB } from "../mongo/connection.js"
import dotenv from 'dotenv'

export const AppInit = (app) => {
    dotenv.config()
    connectionDB()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/api/mocks', MocksRouter)
    
    
}