import './index.css'
import './Pages/IntroductionPage/Links'
import Introduction from './Pages/IntroductionPage'
import ProjectsPage from './Pages/Projects'
import SkillsPage from './Pages/SkillsPage'

function App() {
    return <div className='d-flex flex-column' style={{backgroundColor: "#15102E"}}>
        <Introduction />
        <div style={{ backgroundColor: '#6F66FD', padding: 0.5, marginBottom: 10}}/>
        <SkillsPage />
        <ProjectsPage />
    </div>
}
export default App
