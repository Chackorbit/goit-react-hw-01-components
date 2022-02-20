import user from './user.json';
import data from './statistic/data.json';
import friends from './FriendList/friends.json';
import transactions from './transaction/transactions.json';

import Profile from './Profile';
import Statistic from './statistic/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './transaction/TransactionHistory';

export default function App() {
  return (
    <div>
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}

      <Statistic title="Upload stats" items={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
