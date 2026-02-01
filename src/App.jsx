import './index.css'
import './Pages/IntroductionPage/Links'
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
