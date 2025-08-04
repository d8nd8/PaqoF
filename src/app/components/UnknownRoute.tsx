import { Navigate } from 'react-router-dom'
import {routes} from "../constants/routes.ts";



export const UnknownRoute = () => {
  return <Navigate to={routes.home.url()} />
}
