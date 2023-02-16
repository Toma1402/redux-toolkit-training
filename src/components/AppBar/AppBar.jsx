import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Header, HeaderTitle, Section } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Section>
        <HeaderTitle>Tasks</HeaderTitle>
        <TaskCounter />
      </Section>
      <Section>
        <HeaderTitle>Filter by status</HeaderTitle>
        <StatusFilter />
      </Section>
    </Header>
  );
};
