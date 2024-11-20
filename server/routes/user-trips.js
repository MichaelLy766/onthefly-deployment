import express from 'express'
import { createTripUser, getUserTrips } from '../controllers/user-trips.js'

const router = express.Router()

router.post('/create/:trip_id', createTripUser)
// router.get('/users/:trip_id', getTripUsers)
router.get('/trips/:username', getUserTrips)

export default router