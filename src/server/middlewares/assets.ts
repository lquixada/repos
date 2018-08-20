import express from 'express'
import path from 'path'

const dir = path.join(__dirname, '..', '..', '..', 'dist', 'public')

export default express.static(dir)
