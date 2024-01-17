import './index.css'

const TabItem = props => {
  const {tabsDetails, updatActiveTabId, isActive} = props
  const {tabId, displayText} = tabsDetails
  const activeClassName = isActive ? 'active-tab-btn' : ''
  const onClickTab = () => {
    updatActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container">
      <button className={`tab-btn ${activeClassName}`} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
