import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ReducerContext } from './context/Context.tsx'

createRoot(document.getElementById('root')!).render(
    <ReducerContext>
        <App />
    </ReducerContext>
)
