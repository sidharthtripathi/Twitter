import ReactDOM from "react-dom/client";
import Tweet from "./UserTweet";

import randomUser from "./random";
import { LoadingSpinner } from "./UserTweet";
const root = ReactDOM.createRoot(document.getElementById("root"));

async function rendering() {
  const users = [];
  const randomNumber = Math.floor(Math.random() * 8) + 1;
  for (let i = 0; i < randomNumber; i++) {
    const u = await randomUser();

    users.push(u);
    root.render(
      <>
        {users.map((user) => {
          return <Tweet data={user}></Tweet>;
        })}
      </>
    );
  }
}
root.render(<LoadingSpinner />);

rendering();
