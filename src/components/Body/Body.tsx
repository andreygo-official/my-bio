

import { About } from '../About/About'
import { Contacts } from '../Contacts/Contacts'
import { Home } from '../Home/Home'
import { Projects } from '../Projects/Projects'

export const Body = () => {
  return (
    <>
      <div className='container'>
        <Home />
      </div>
      <About />
      <Projects />
      <Contacts />

    </>

  )
}
