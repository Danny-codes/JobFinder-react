import Articles from "../components/HomeComponents/Articles"
import Estatistics from "../components/HomeComponents/Estatistic"
import Evaltuation from "../components/HomeComponents/Evaluation"
import Footer from "../components/Reutilized/Footer"
import Header from "../components/Reutilized/Header"
import Main from "../components/HomeComponents/Main"
import SendComponent from "../components/HomeComponents/SendComponent"
import HeaderBanner from "../components/HomeComponents/HeaderBanner"

const InitialPage = () => {
    return (
        <>
            <Header />
            <HeaderBanner />
            <Main />
            <SendComponent />
            <Estatistics />
            <Evaltuation />
            <Articles />
            <Footer />
        </>
    )
}

export default InitialPage