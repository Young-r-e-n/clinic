import Layout from "../components/Layout"
import Grid from "../components/Grid";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import FooterPage from "../components/Footer";
import NavbarPage from "../components/Navtest";
import MultiCarouselPage from "../components/Testimonial";
import Address from "../components/Address";
import FormPage from "../components/Form";
import Certifications from "../components/Certifications";
import Header from "../components/headers";
import Slidersi from "../components/Sliders";
import Carousela from "../components/caroussels";
import Demoslider from "../components/Demoslide";

const Index = () => {

  return (
    <Layout pageTitle="Landing Page Nextjs">


      <Header />
    <Slidersi />
      <Grid />
      <MultiCarouselPage />
      <Address />
      
      <FormPage />
      <Certifications />
      <FooterPage />
    </Layout>
  )
}
export default Index;