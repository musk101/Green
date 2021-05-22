import './App.css';
import ScrollToTop from "react-scroll-to-top";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Form from "./Form";
import niblink from "./niblink.svg";
import LinkPage from "./LinkPage";
import nightday from "./nightday.svg";
import Aboutus from "./Aboutus";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from './Logo.svg';

function App() {
  return (
    <div className="App">
        <ScrollToTop smooth color="#34c25E" />
     <header class="header">
		<h1 class="logo">
      <a href="#"><img src={Logo} alt=""/></a>
      </h1>
      <ul class="main-nav">
          <li><a href="#">Work</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><img src={nightday}/></li>
          <li><a href="#" className="lets_talk">Let's Talk</a></li>
      </ul>
	</header>
  <Router>
  <Switch>
              <Route exact path='/' component={Page1} />
              <Route exact path='/design' component={Page2} />
              <Route exact path='/develop' component={Page3} />
              <Route exact path='/market' component={Page4} />
              <Route exact path='/about' component={Aboutus} />
              <Route exact path='/form' component={Form} />
              <Route exact path='/ui' component={(props) => <LinkPage linktext="When the product, websites deals with repetitive tasks, it's hard to keep users excited about it. That's where UI comes into play."  linkphoto={niblink} secondlinktext="On a website, web or mobile app, humans constanly interact with multiple elements. While a good UI (User Interface) ensures that user is able to do his/her task without being lost, UX (User Experience) ensures that the design is intuitive and evokes the right emotions and empowers the user. User engagement happens when UI & UX work together."{...props} />} />
              <Route exact path='/ux' component={(props) => <LinkPage linktext="User experience design, known as UX design, is a user-centered design aimed at meeting user's needs."  linkphoto={niblink} secondlinktext="The term User Experience was coined by Donald Arthur Norman, the master and the most regarded individual in the field of design, usability, engineering and cognitive science. User Experience is everything that user experiences while associating with any product, item, service or brand. It might be the great or awful experience. The UX can be founded on the aggregate of personal interactions."{...props} />} />
              <Route exact path='/mockupdesign' component={(props) => <LinkPage linktext="In manufacturing and design, a mockup, or mock-up, is a scale or full-size model of a design or device, used for teaching, demonstration, design evaluation, promotion, and other purposes. "  linkphoto={niblink} secondlinktext="A mockup suggests what the final design will look like, and is usually shared with clients and stakeholders between a wireframe and prototype.
Wireframes are built and shared to communicate the structure and functional requirements of the design. Mockups are essentially wireframes with an added surface layer that communicates the visual design (colors, images, typography).
Unlike a prototype, a mockup is static and doesn’t include any interactions."{...props} />} />
<Route exact path='/graphicdesign' component={(props) => <LinkPage linktext="Graphics are concerned mostly about a creative interpretation"  linkphoto={niblink} secondlinktext="Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience."{...props} />} />

<Route exact path='/materialdesign' component={(props) => <LinkPage linktext="Material Design has now already surpassed the realm of mobile apps and become a principle often utilized in web design. There is no wonder that touches of Material Design have been an irreversible trending of the year."  linkphoto={niblink} secondlinktext="Basically, it’s a way to make design elements look like touchable, and the properties of Goolge itself are the best examples of material design. As of right now, a growing number of websites have been dedicated to this topic, and we’ve made a collection of the best Material Design website examples for you to get inspirations."{...props} />} />
<Route exact path='/logodesign' component={(props) => <LinkPage linktext="Your logo should be distinct, designed to stand out from similar brands. Use design elements that fall outside of the current trends in order to create a strong visual impact. The brand should have a unique story, and this will be your guiding light to design a distinct logo for it."  linkphoto={niblink} secondlinktext="A logo is a symbol made up of text and images that identifies a business. A good logo shows what a company does and what the brand values.

Logo design is all about creating the perfect visual brand mark for a company. Depending on the type, a logo usually consists of a symbol or brandmark and a logotype, along with a tagline."{...props} />} />

<Route exact path='/content' component={(props) => <LinkPage linktext="Content creation is the process of identifying a new topic you want to write about, deciding which form you want the content to take, formalizing your strategy (keyword or otherwise), and then actually producing it."  linkphoto={niblink} secondlinktext="Content creation is the most important element to any social media campaign. ... We design micro-content to be distributed on your social media channels. Micro-content is content created specifically for the channel it is posted on. It is used for the sole purpose of engaging your social media fans and followers."{...props} />} />

<Route exact path='/ui' component={(props) => <LinkPage linktext="Small, simple animations are engaging and interesting; the user might not even think about their being an animation at all."  linkphoto={niblink} secondlinktext="Animation is not just for cartoons anymore. From full-screen moving images to small hover effects, touches of animation are popping up everywhere. Animation is trendy, fun and user friendly. Animation in web design is something that we are starting to see more of every day. Large-scale animations can be an interesting visual that pull you into the design."{...props} />} />



     </Switch>
    </Router>
  </div>
  );
}

export default App;