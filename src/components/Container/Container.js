import './container.css'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Container() {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
