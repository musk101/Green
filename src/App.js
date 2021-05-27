import './App.css';
import ScrollToTop from "react-scroll-to-top";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Form from "./Form";
import niblink from "./niblink.svg";
import LinkPage from "./LinkPage";
import LinkPageDevelop from "./LinkPageDevelop";
import nightday from "./nightday.svg";
import Aboutus from "./Aboutus";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from './Logo.svg';
import Work from './Work';
import ae from "./ae.svg";

function App() {
  return (
    <div className="App">
        <ScrollToTop smooth color="#34c25E" />
     <header class="header">
		<h1 class="logo">
      <a href="#"><img src={Logo} alt=""/></a>
      </h1>
      <ul class="main-nav">
          <li><a href="/work">Work</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="/about">About</a></li>
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

<Route exact path='/animations' component={(props) => <LinkPage linktext="Small, simple animations are engaging and interesting; the user might not even think about their being an animation at all."  linkphoto={niblink} secondlinktext="Animation is not just for cartoons anymore. From full-screen moving images to small hover effects, touches of animation are popping up everywhere. Animation is trendy, fun and user friendly. Animation in web design is something that we are starting to see more of every day. Large-scale animations can be an interesting visual that pull you into the design."{...props} />} />

<Route exact path='/webdev' component={(props) => <LinkPageDevelop linktext="Web development includes web designing, publishing, programming, and database management."  linkphoto={niblink} secondlinktext="Web development broadly refers to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting, and network security configuration, among other tasks.
"{...props} />} />
<Route exact path='/androidapp' component={(props) => <LinkPageDevelop linktext="When the product, websites deals with repetitive tasks, it's hard to keep users excited about it. That's where UI comes into play."  linkphoto={niblink} secondlinktext="On a website, web or mobile app, humans constanly interact with multiple elements. While a good UI (User Interface) ensures that user is able to do his/her task without being lost, UX (User Experience) ensures that the design is intuitive and evokes the right emotions and empowers the user. User engagement happens when UI & UX work together."{...props} />} />
<Route exact path='/webapp' component={(props) => <LinkPageDevelop linktext=" A web application is a software or program which is accessible using any web browser."  linkphoto={niblink} secondlinktext=" web application is application software that runs on a web server, unlike computer-based software programs that are run locally on the operating system of the device. Web applications are accessed by the user through a web browser with an active network connection."{...props} />} />
<Route exact path='/iosapp' component={(props) => <LinkPageDevelop linktext="When the product, websites deals with repetitive tasks, it's hard to keep users excited about it. That's where UI comes into play."  linkphoto={niblink} secondlinktext="On a website, web or mobile app, humans constanly interact with multiple elements. While a good UI (User Interface) ensures that user is able to do his/her task without being lost, UX (User Experience) ensures that the design is intuitive and evokes the right emotions and empowers the user. User engagement happens when UI & UX work together."{...props} />} />
<Route exact path='/maintainandtest' component={(props) => <LinkPageDevelop linktext="Once a system is deployed it is in service for years and decades. During this time the system and its operational environment is often corrected, changed or extended. "  linkphoto={niblink} secondlinktext="When any changes are made as part of maintenance, maintenance testing should be performed, both to evaluate the success with which the changes were made and to check for possible side-effects (e.g., regressions) in parts of the system that remain unchanged (which is usually most of the system)."{...props} />} />
<Route exact path='/uidev' component={(props) => <LinkPageDevelop linktext="A UI developer's role is to translate creative software design concepts and ideas into reality using front-end technology."  linkphoto={niblink} secondlinktext="They understand the user interface design solution both in its practical intent and creative vision, and convert it into engineered softwares. A UI Developer is the bridge between presentation layer and the back-end layer, who understands both and creates a niche as the translational layer in between, so that both lives up to its full potential and are not compromised because of each other."{...props} />} />
<Route exact path='/api' component={(props) => <LinkPageDevelop linktext="An API integration is the connection between two or more applications, via their APIs, that lets those systems exchange data."  linkphoto={niblink} secondlinktext="A set of subroutine definitions, protocols, and tools for building application software. In general terms, it is a set of clearly defined methods of communication between various software components."{...props} />} />

<Route exact path='/digital' component={(props) => <LinkPage linktext="Email marketing, pay-per-click advertising, social media marketing and even blogging are all great examples of digital marketing—they help introduce people to your company and convince them to buy."  linkphoto={niblink} secondlinktext="Digital marketing is the act of promoting and selling products and services by leveraging online marketing tactics such as social media marketing, search marketing, and email marketing. When you get down to it, digital marketing is simply marketing."{...props} />} />

<Route exact path='/content' component={(props) => <LinkPage linktext="engaged in the business of giving expert advice to people working in a professional or technical field."  linkphoto={niblink} secondlinktext="Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes. It can include writing blog posts and articles, scripts for videos and podcasts, as well as content for specific platforms, such as tweetstorms on Twitter or text posts on Reddit."{...props} />} />

<Route exact path='/consulting' component={(props) => <LinkPage linktext="engaged in the business of giving expert advice to people working in a professional or technical field."  linkphoto={niblink} secondlinktext="In a nutshell, consultants provide expert opinions, analysis, and recommendations to organizations or individuals, based on their own expertise. They're essentially fixers, serving as objective troubleshooters, and providing strategies to prevent problems and improve performance." {...props} />} />

<Route exact path='/branding' component={(props) => <LinkPage linktext="Branding is endowing products and services with the power of a brand."  linkphoto={niblink} secondlinktext="The practice of creating a name, symbol or design that identifies and differentiates a product from other products. An effective brand strategy gives you a major edge in increasingly competitive markets."{...props} />} />
<Route exact path='/work' component={Work} />
     </Switch>
    </Router>
  </div>
  );
}

export default App;