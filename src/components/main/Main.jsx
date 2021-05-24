import About from "./about/About"
import Contacts from "./contacts/Contacts"
import Expertise from "./expertise/Expertise"
import Teams from "./teams/Teams"
import Testimonials from "./testimonials/Testimonials"
import Works from "./works/Works"

const Main = () => {
    return (
        <main>
            <About />
            <Expertise />
            <Teams />
            <Works />
            <Testimonials />
            <Contacts />
        </main>
    )
}

export default Main;