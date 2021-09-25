import user from './data/user';
import colors from './data/colors';
import stats from './data/stats';
import friends from './data/friends';
import transactions from './data/transactions';

import Container from './components/Container';
import Section from './components/Section';
import Profile from './components/Profile';
import Stats from './components/Stats';
import Friends from './components/Friends';
import Transactions from './components/Transactions';

function App() {
  return (
    <Container>
      <Section title="Task #1: Profile">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Task #2: Statistics">
        <Stats
          title="Upload stats"
          stats={stats}
          palette={colors}
        />
      </Section>
      <Section title="Task #3: Friends">
        <Friends
          friends={friends}
        />
      </Section>
      <Section title="Task #4: Transactions">
        <Transactions
          items={transactions}
        />
      </Section>
    </Container>
  );
}

export default App;
