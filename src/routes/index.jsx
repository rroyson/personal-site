import ProfilePage from 'views/ProfilePage/ProfilePage.jsx'
import TechnologiesPage from 'views/TechnologiesPage/TechnologiesPage.jsx'
import ProjectsPage from 'views/ProjectsPage/ProjectsPage.jsx'

var indexRoutes = [
  { path: '/projects', name: 'ProjectsPage', component: ProjectsPage },

  {
    path: '/tech-page',
    name: 'TechnologiesPage',
    component: TechnologiesPage
  },
  { path: '/', name: 'ProfilePage', component: ProfilePage }
]

export default indexRoutes
