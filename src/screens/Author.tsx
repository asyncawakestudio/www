import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import React from "react";

import posts from "../content/posts.json";

export default function Author() {
  const { name } = useParams();

  const postsByAuthor = React.useMemo(
    () => posts.filter((post) => post.author === name),
    [name],
  );

  return (
    <Box style={{ display: "block" }}>
      <List>
        <ListItem style={{ paddingLeft: 0 }}>
          <Link data-testid="author-backtomainpage" href="/">
            Go back to main page
          </Link>
        </ListItem>
        <br />
        {name && (
          <Typography style={{ textAlign: "left" }}>Posts by {name}</Typography>
        )}
        <br />
        {postsByAuthor.map((post) => (
          <ListItem key={post.date} style={{ paddingLeft: 0 }}>
            <Link href={`#/blog/post/${post.date}`}>{post.name}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
