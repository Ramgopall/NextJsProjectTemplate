import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Demo from "./index";
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 400,
        padding: 16,
    },
    textField: {
        width: '100%',
    }
});

export default function AddUser() {

    const classes = useStyles();

    const onSubmit = async values => {
        window.alert(JSON.stringify(values, 0, 2));

    };

    return (
        <Container>
            <Demo />
            <Card className={classes.root}>
                <Typography>
                    Add User
                </Typography>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Box display="flex" flexDirection="column">
                                <Box mt={2}>
                                    <Field name="user_name">
                                        {props => (
                                            <TextField
                                                className={classes.textField}
                                                label="User Name"
                                                variant="outlined"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        )}
                                    </Field>
                                </Box>
                                <Box mt={2}>
                                    <Field name="file">
                                        {props => (
                                            <TextField
                                                className={classes.textField}
                                                type="file"
                                                label="JSON File"
                                                variant="outlined"
                                                inputProps={{
                                                    accept: "video/mp4,video/x-m4v,video/*"
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        )}
                                    </Field>
                                </Box>
                                <Box mt={2} mb={2}>
                                    <Button variant="contained" color="primary" type="submit">
                                        Submit
                                </Button>
                                </Box>
                            </Box>
                        </form>
                    )}
                />
            </Card>
        </Container>
    )
}
