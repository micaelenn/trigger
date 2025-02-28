import { FC } from 'react';
import PopUp from "@/components/Popup/Popup"
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/700.css';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <PopUp />
  )
}

export default App
