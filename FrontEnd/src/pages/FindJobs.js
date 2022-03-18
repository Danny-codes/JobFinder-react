import Header from "../components/Reutilized/Header"
import Footer from "../components/Reutilized/Footer"
import Search from "../components/FindJobComponents/Seach";

const Dummy_Data = [
    {
      path: "img/facebooklogo.png",
      name: "Facebook",
      position: "Developer",
      location: "Menio Park, California",
      type: "CLT",
      id: "1",
    },
    {
      path: "img/googlelogo.png",
      name: "Google",
      position: "FrontEndDeveloper",
      location: "Mountain View, California",
      type: "PJ",
      id: "2",
    },
    {
      path: "img/ibmlogo.png",
      name: "IBM",
      position: "Intern",
      location: "Armonk, New York",
      type: "Home Office",
      id: "3",
    },
    {
      path: "img/ibmlogo.png",
      name: "IBM",
      position: "Intern",
      location: "Armonk, New York",
      type: "Home Office",
      id: "4",
    },
    {
      path: "img/facebooklogo.png",
      name: "Facebook",
      position: "Developer",
      location: "Menio Park, California",
      type: "CLT",
      id: "1",
    },
  ];

const FindJobs = () => {
    
    return(
        <>
            <Header/>
            <Search dummy_data={Dummy_Data}/>
            <Footer />
        </>
    )
}

export default FindJobs