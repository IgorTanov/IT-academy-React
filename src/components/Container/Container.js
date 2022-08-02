import './container.css'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Page from '../pages/Page/Page'

export default function Container() {
    return (
        <div className="container">
            <Header />
            <Main />
            <Page/>
            <Footer />
        </div>
    )
}
