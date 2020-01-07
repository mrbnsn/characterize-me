import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useHistory } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react';

const AppMenu = () => {

    let history = useHistory();

    return (
        <Dropdown icon='user' simple>
            <Dropdown.Menu direction="left">
                <Dropdown.Item onClick={() => history.push("/profile")}>Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => signOut()}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

    function signOut()
    {
        Meteor.logout((err) => {
            if( !err ) {
                history.push("/");
            } else {
                console.log(err);
            }
        });
    }
}

export default AppMenu