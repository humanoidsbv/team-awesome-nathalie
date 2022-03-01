import GlobalStyle from "../../styles/global";

import { Header } from "../../src/components/header/Header";
import { TeamMembersComponent } from "../../src/components/team-members-component/TeamMembersComponent";

const TeamMembers = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TeamMembersComponent />
    </>
  );
};

export default TeamMembers;
