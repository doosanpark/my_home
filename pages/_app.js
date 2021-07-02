import '../styles/global.css';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({Component, pageProps}){
    return <Component{...pageProps} />
}

export default MyApp;