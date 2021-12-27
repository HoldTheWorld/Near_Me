import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userLogout } from "../../redux/actions/user.actions"

const Logout = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  useEffect(() => {
    dispatch(userLogout())
    history('/')
  }, [])

  return null
}

export default Logout
