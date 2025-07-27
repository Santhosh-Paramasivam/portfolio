import './index.css'
import './Pages/IntroductionPage/Links'
import ProjectCarousel from './Pages/IntroductionPage/ProjectCarousel'
import Brand from './Pages/IntroductionPage/Brand'
import Projects from './Pages/Projects/Projects'
import Frameworks from './Pages/Skills/Frameworks'
import Databases from './Pages/Skills/Databases'
import Languages from './Pages/Skills/Languages'
import Introduction from './Pages/IntroductionPage'
import ProjectsPage from './Pages/Projects'
import SkillsPage from './Pages/SkillsPage'

function App() {
    return <div className='d-flex flex-column'>
        <Introduction />
        <ProjectsPage />
        <SkillsPage />
    </div>
}
export default App
