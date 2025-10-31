import { API_PREFIX } from '../constants/index.js'
import { UserRoutes } from './user.route.js'

export const registerApi = (app) => {
    app.use(`${API_PREFIX}/user`, UserRoutes)
}