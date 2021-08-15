import "./styles.css";
import Category from "./Category";
import Show from "./Show";
import outer from "./outer.jfif";
import vikings from "./vikings.jfif";
import gossip from "./gossip.jfif";
import stranger from "./stranger.jfif";
import money from "./money.jfif";
import got from "./got.jfif";
import office from "./offic.jfif";
import friends from "./friends.jfif";
import loki from "./loki.jfif";
import manifest from "./manifest.jfif";
import cindrella from "./cindrella.jfif";
import rick from "./rick.jfif";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>TV Series Recommendation</h1>
      </div>
      <h2>Categories</h2>
      <div className="categories">
        <Category title="Comedy" />
        <Category title="Action" />
        <Category title="Romance" />
        <Category title="Mystery" />
      </div>
      <h2>Shows</h2>
      <div className="shows">
        <div className="comedy">
          <Show
            className="Comedy"
            title="Friends"
            platform="Netflix"
            rating="5/5"
            src={friends}
          />
          <Show
            className="Comedy"
            title="The Office"
            platform="Hotstar"
            rating="4.5/5"
            src={office}
          />
          <Show
            className="Comedy"
            title="Rick and Morty"
            platform="Netflix"
            rating="4/5"
            src={rick}
          />
        </div>
        <div className="action">
          <Show
            className="Action"
            title="Outer Bank"
            platform="Netflix"
            rating="5/5"
            src={outer}
          />
          <Show
            className="Action"
            title="Game Of Thrones"
            platform="Netflix"
            rating="4.5/5"
            src={got}
          />
          <Show
            className="Action"
            title="Loki"
            platform="Netflix"
            rating="3.5/5"
            src={loki}
          />
        </div>
        <div className="romance">
          <Show
            className="Romance"
            title="Vikings"
            platform="Netflix"
            rating="5/5"
            src={vikings}
          />
          <Show
            className="Romance"
            title="Gossip Girl"
            platform="Amazon Prime"
            rating="4.5/5"
            src={gossip}
          />
          <Show
            className="Romance"
            title="Cindrella"
            platform="Amazon Prime"
            rating="3.5/5"
            src={cindrella}
          />
        </div>
        <div className="mystery">
          <Show
            className="Mystery"
            title="Stranger Things"
            platform="Netflix"
            rating="5/5"
            src={stranger}
          />
          <Show
            className="Mystery"
            title="Money Heist"
            platform="Netflix"
            rating="5/5"
            src={money}
          />
          <Show
            className="Mystery"
            title="Manifest"
            platform="Netflix"
            rating="4/5"
            src={money}
          />
        </div>
      </div>
    </div>
  );
}
