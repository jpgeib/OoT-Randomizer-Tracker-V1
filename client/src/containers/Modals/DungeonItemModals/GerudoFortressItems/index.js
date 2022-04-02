import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/GerudoFortress/SmallKey";

class GerudoFortressItems extends Component {

    state = {
        open: false
    }

    componentDidMount() {
        const gerudoFortressItemsData = JSON.parse(window.localStorage.getItem("gerudoFortressItems"));
        this.setState(gerudoFortressItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("gerudoFortressItems", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;
        const { fortressKeysLogic } = this.props;

        return (
            <Modal
                trigger={<Button fluid content="Gerudo Fortress" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Gerudo Fortress Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <SmallKey 
                                fortressKeysLogic={fortressKeysLogic}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default GerudoFortressItems;