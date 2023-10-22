// Definition
import loadable from '@loadable/component'
export const resolveComponent = (imported) => imported.default

// Root path
export const MainLayout = loadable(() => import('../template/main.tsx'))
export const IndexDashboard = loadable(
  () => import('../page/dashboard/index.tsx'),
)
