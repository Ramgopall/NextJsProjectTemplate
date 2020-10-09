import React from "react";
import Container from "@material-ui/core/Container";
import Demo from "./index";
import UserList from '../component/UserList';
export default function Accounts() {

    return (
        <Container>
            <Demo />
            <UserList />
        </Container >
    )
}
