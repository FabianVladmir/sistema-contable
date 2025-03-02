import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'
import { queryClient } from './utils/queryClient'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>,
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> e5a4e8f (Integrando handsontable)
  )
} else {
  console.error("No se encontró el elemento con id 'root'.")
}
