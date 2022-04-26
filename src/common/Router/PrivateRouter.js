import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoutes = ({ component: Component, exact, path, restricted, ...rest }) => {

  // Login placeholder
  const {isLogin}=useSelector(state=>state.Pag)

  return (
    <Route
      exact={exact}
      path={path}
      render={props => isLogin ? <Component {...props} /> : <Redirect to='/' />}
      {...rest}
    />
  )
}

export default PrivateRoutes;