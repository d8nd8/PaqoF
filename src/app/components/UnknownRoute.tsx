import { Navigate } from 'react-router-dom'
import {routes} from "../constants/routes";



export const UnknownRoute = () => {
  return <Navigate to={routes.home.url()} />
}
