// import clsx from "clsx";
import "./App.css";
import Profile from "./components/profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/friendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
