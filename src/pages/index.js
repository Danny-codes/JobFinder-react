import Articles from "../components/HomeComponents/Articles"
import Estatistics from "../components/HomeComponents/Estatistic"
import Evaltuation from "../components/HomeComponents/Evaluation"
import Footer from "../components/HomeComponents/Footer"
import Header from "../components/HomeComponents/Header"
import Main from "../components/HomeComponents/Main"
import SendComponent from "../components/HomeComponents/SendComponent"

const InitialPage = () => {
    return (
        <>
            <Header />
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