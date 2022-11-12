export const App = () => {
  return (
    <div className="app">
      <div id="navigation">
        <div class="navigation-line">
          <a href="#home">HOME</a>
        </div>
        <div class="navigation-line">
          <a href="#code">CODE</a>
        </div>
        <div class="navigation-line">
          <a href="#photography">PHOTOGRAPHY</a>
        </div>
        <div class="navigation-line">
          <a href="#biography">BIOGRAPHY</a>
        </div>
      </div>

      <div id="home">
        <div id="home-name">Kenneth Lai</div>
        <div class="personal-links">
          <a href="https://www.linkedin.com/in/kennethklai/">
            <img src="icons/linkedin.svg" />
          </a>
          <a href="https://github.com/klnyc">
            <img src="icons/github.svg" />
          </a>
          <a href="https://www.instagram.com/kl.nyc/">
            <img src="icons/instagram.svg" />
          </a>
          <a href="https://www.youtube.com/watch?v=WpM40BC9rbk">
            <img src="icons/youtube.svg" />
          </a>
        </div>
      </div>

      <div id="code">
        <div class="section-name">CODE</div>
        <div class="project">
          <div class="project-image">
            <a href="https://idestination.web.app/">
              <img src="/screenshots/idestination.png" />
            </a>
          </div>
          <div class="project-description">
            <div class="project-title">
              <a href="https://idestination.web.app/">iDestination</a>
            </div>
            <div class="project-summary">
              iDestination is a travel planning web application which allows
              users to keep track of places that they have traveled to in the
              past and places that they plan to visit in the future. Users can
              search, add, and filter locations on an integrated map and view
              real-time weather of any city.
            </div>
            <div class="project-technologies">
              JavaScript, Node.js, React, Redux, Firebase, Webpack, Google Maps
              API, Open Weather API, HTML, CSS
            </div>
            <div class="project-links">
              <a href="https://idestination.web.app/">
                <img src="icons/link.svg" />
              </a>
              <a href="https://github.com/klnyc/iDestination">
                <img src="icons/github.svg" />
              </a>
              <a href="https://www.youtube.com/watch?v=WpM40BC9rbk">
                <img src="icons/youtube.svg" />
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <div class="project-image">
            <a href="https://jukeboxcenter.herokuapp.com/">
              <img src="/screenshots/jukeboxcenter.png" />
            </a>
          </div>
          <div class="project-description">
            <div class="project-title">
              <a href="https://jukeboxcenter.herokuapp.com/">Jukebox Center</a>
            </div>
            <div class="project-summary">
              Jukebox Center is an e-commerce website that sells music albums.
              Users can filter albums by genre, add albums to their cart to
              checkout as a user or guest, and view their order history.
            </div>
            <div class="project-technologies">
              JavaScript, Node.js, React, Redux, Express, PostgreSQL, Sequelize,
              Webpack, Heroku, HTML, CSS
            </div>
            <div class="project-links">
              <a href="https://jukeboxcenter.herokuapp.com/">
                <img src="icons/link.svg" />
              </a>
              <a href="https://github.com/klnyc/JukeboxCenter">
                <img src="icons/github.svg" />
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <div class="project-image">
            <a href="https://paperrockets.web.app/">
              <img src="/screenshots/paperrockets.png" />
            </a>
          </div>
          <div class="project-description">
            <div class="project-title">
              <a href="https://paperrockets.web.app/">Paper Rockets</a>
            </div>
            <div class="project-summary">
              Paper Rockets is a website for paper trading stocks in the U.S.
              stock market. Users can buy/sell shares and track publicly traded
              companies in their watchlist using real-time stock data.
            </div>
            <div class="project-technologies">
              JavaScript, Node.js, React, Firebase, IEX Cloud API, HTML, Sass,
              Bootstrap
            </div>
            <div class="project-links">
              <a href="https://paperrockets.web.app/">
                <img src="icons/link.svg" />
              </a>
              <a href="https://github.com/klnyc/Paper-Rockets">
                <img src="icons/github.svg" />
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <div class="project-image">
            <a href="https://weout.web.app/">
              <img src="/screenshots/weout.png" />
            </a>
          </div>
          <div class="project-description">
            <div class="project-title">
              <a href="https://weout.web.app/">WeOut</a>
            </div>
            <div class="project-summary">
              WeOut is an instant messaging application that allows users to
              create circles and chat with members within their circles,
              identified by unique screen names.
            </div>
            <div class="project-technologies">
              JavaScript, Node.js, React, Firebase, HTML, Sass, Bootstrap
            </div>
            <div class="project-links">
              <a href="https://weout.web.app/">
                <img src="icons/link.svg" />
              </a>
              <a href="https://github.com/klnyc/WeOut">
                <img src="icons/github.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="photography">
        <div class="section-name">PHOTOGRAPHY</div>
        <a class="button" href="https://www.instagram.com/kl.nyc/">
          View Portfolio
        </a>
        <div id="photo-grid">
          <div class="photo-row">
            <div class="photo">
              <img src="photos/Tribute in Light (Bridge).jpg" />
            </div>
            <div class="photo">
              <img src="photos/Chinatown.jpg" />
            </div>
            <div class="photo">
              <img src="photos/Mongkok.jpg" />
            </div>
          </div>
          <div class="photo-row">
            <div class="photo">
              <img src="photos/Tokyo International Forum (Front).jpg" />
            </div>
            <div class="photo">
              <img src="photos/Incheon International Airport (Right).jpg" />
            </div>
            <div class="photo">
              <img src="photos/Shinjuku (Street).jpg" />
            </div>
          </div>
          <div class="photo-row">
            <div class="photo">
              <img src="photos/Senso-Ji.jpg" />
            </div>
            <div class="photo">
              <img src="photos/Dongdaemun Design Plaza (Outdoors).jpg" />
            </div>
            <div class="photo">
              <img src="photos/Dangsan (Station).jpg" />
            </div>
          </div>
        </div>
      </div>

      <div id="biography">
        <div class="section-name">BIOGRAPHY</div>
        <div class="biography-summary">
          Driven creator with a passion for designing, building, and scaling
          products to their full potential. Inspired by technology who believes
          in precision and accuracy, not just in engineering, but in life as
          well.
        </div>
        <div class="personal-links">
          <a href="https://www.linkedin.com/in/kennethklai/">
            <img src="icons/linkedin.svg" />
          </a>
          <a href="https://github.com/klnyc">
            <img src="icons/github.svg" />
          </a>
          <a href="https://www.instagram.com/kl.nyc/">
            <img src="icons/instagram.svg" />
          </a>
          <a href="https://www.youtube.com/watch?v=WpM40BC9rbk">
            <img src="icons/youtube.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};
