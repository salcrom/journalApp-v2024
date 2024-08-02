import { IconButton, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>
                Aliquip aliquip proident ex elit sunt nisi aliquip labore mollit
                sunt tempor nostrud veniam. Sint minim ipsum nulla amet
                incididunt veniam non amet aliquip ut nulla dolor officia anim.
                Non dolor excepteur et tempor minim ut fugiat commodo dolor
                exercitation. Exercitation quis ex occaecat fugiat ipsum anim eu
                qui eiusmod quis veniam eu esse anim. Commodo id elit culpa ut
                id aliquip voluptate officia incididunt voluptate dolor laboris
                officia laborum. Do commodo ex sit ipsum eu aliqua ea anim eu.
            </Typography> */}

            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    ":hover": { backgroundColor: "error.main", opacity: 0.9 },
                    position: "fixed",
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
};
