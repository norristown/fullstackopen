import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import blogsReducer from './reducers/blogsReducer'
import addBlogReducer from './reducers/addBlogReducer'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  addBlog: addBlogReducer,
})
const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
