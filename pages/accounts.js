import React from "react";
import Container from "@material-ui/core/Container";
import Demo from "./index";
import AccountList from '../component/AccountList';
export default function Accounts() {

    return (
        <Container>
            <Demo />
            <AccountList />
        </Container >
    )
}
