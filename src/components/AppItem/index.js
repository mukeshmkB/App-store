import './index.css'

const AppItem = props => {
  const {appsDetails} = props
  const {appName, imageUrl, category, appId} = appsDetails
  return (
    <li className="logo-container">
      <img src={imageUrl} alt={appName} className="logo-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
