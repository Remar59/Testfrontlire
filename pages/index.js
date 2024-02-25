import Login from '../components/Login';
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'

function Index() {
  const user = useSelector((state)=>state.users.value)
  const router = useRouter()

  if(user === null){
    router.push('/login')
  } else {
    
  }

  // si token user dans le reducer envoi vers page home sinon vers page login
  return <Login />;
}

export default Index;
