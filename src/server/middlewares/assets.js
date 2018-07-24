import path from 'path'
import express from 'express'

const dir = path.join(__dirname, '..', '..', '..', 'dist', 'public')

export default express.static(dir)
