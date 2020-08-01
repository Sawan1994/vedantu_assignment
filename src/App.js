import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Tabs from "./components/Tabs";
import Content from "./components/Content";

const profile = {
  login: "supreetsingh247",
  id: 7427552,
  node_id: "MDQ6VXNlcjc0Mjc1NTI=",
  avatar_url: "https://avatars1.githubusercontent.com/u/7427552?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/supreetsingh247",
  html_url: "https://github.com/supreetsingh247",
  followers_url: "https://api.github.com/users/supreetsingh247/followers",
  following_url:
    "https://api.github.com/users/supreetsingh247/following{/other_user}",
  gists_url: "https://api.github.com/users/supreetsingh247/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/supreetsingh247/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/supreetsingh247/subscriptions",
  organizations_url: "https://api.github.com/users/supreetsingh247/orgs",
  repos_url: "https://api.github.com/users/supreetsingh247/repos",
  events_url: "https://api.github.com/users/supreetsingh247/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/supreetsingh247/received_events",
  type: "User",
  site_admin: false,
  name: "Supreet Singh",
  company: "Target Corporation",
  blog: "",
  location: "India",
  email: null,
  hireable: null,
  bio: "Front end developer since 1.5 years",
  twitter_username: null,
  public_repos: 12,
  public_gists: 0,
  followers: 6,
  following: 2,
  created_at: "2014-04-28T09:44:57Z",
  updated_at: "2020-06-08T19:15:30Z",
};

function App() {
  return (
    <div className="container">
      <aside>
        <Profile {...profile}></Profile>
      </aside>
      <section>
        <Tabs defaultTab="Repositories">
          <div tab="Overview">Content of Tab 1</div>
          <div tab="Repositories">
            <Content></Content>
          </div>
          <div tab="Projects">Content of Tab 3</div>
        </Tabs>
      </section>
    </div>
  );
}

export default App;