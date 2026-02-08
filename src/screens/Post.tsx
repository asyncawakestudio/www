import { Box, Link, List, ListItem } from "@mui/material";
import Markdown from 'react-markdown';
import { useParams } from "react-router-dom";

import {
    POST_20260301,
    postsInfo,
} from "../content/index";

export default function Post() {
    const { date } = useParams();

    const posts: Record<string, string> = {
        '2026-03-01.md': POST_20260301,
    };

    return (
        <Box>
            <div style={{ textAlign: 'left' }}>
                <Markdown>
                    {posts[date + '.md']}
                </Markdown>
            </div>

            <br />

            <List>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link data-testid="posts-backtomainpage" href={`/`}>Home</Link>
                </ListItem>
                {postsInfo.map((post) => (
                    <ListItem key={post.date} style={{ paddingLeft: 0 }}>
                        <Link href={`#/blog/post/${post.date}`}>{post.name}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
