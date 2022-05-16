import * as React from "react";
import { arrayOf, string } from "prop-types";
import styled from "styled-components";
import Link from "src/components/Link";
import Grid from "src/components/Grid";

const User = styled(Link)`
  display: block;
  text-align: center;
  overflow: hidden;
`;

const Avatar = styled.img`
  max-width: 100%;
  height: auto;
  line-height: 0;
  display: block;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const GithubContributorsGrid = (props) => {
  const { users } = props;

  return (
    <Grid columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
      {users.map((user) => (
        <User key={user} href={`https://github.com/${user}`} muted>
          <Avatar
            src={`https://github.com/${user}.png?size=400`}
            alt=""
            width="200"
          />
          @{user}
        </User>
      ))}
    </Grid>
  );
};

GithubContributorsGrid.propTypes = {
  users: arrayOf(string).isRequired,
};

export default GithubContributorsGrid;
