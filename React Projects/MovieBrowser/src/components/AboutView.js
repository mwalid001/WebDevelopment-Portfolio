import Hero from "./Hero.js";

const AboutView = () => {
  return (
    <>
      <Hero text="About Me" /> 
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-2 my-5 pt-5"> {/* offset-2 makes it move to right 2 columns */}
            <p className="lead"> {/* lead makes text bigger */}
              I am a Computer Science graduate from Nile University. This is my React project. <strong>"A Movie browser"</strong>.
              <br/><i>Take a look at the documentation file</i><br/><br/><br/><i><u>Mohamed Walid Abd El Mohsen</u></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
