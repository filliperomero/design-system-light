import { Widget } from './components/Widget'
import { SignIn } from './pages/SignIn'

import './styles/global.css'

export function App() {
  return (
    <div className='relative'>
      <SignIn />
      <Widget />
    </div>
  )
}
