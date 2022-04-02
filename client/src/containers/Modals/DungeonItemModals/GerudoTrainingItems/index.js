import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/GerudoTrainingGrounds/SmallKey";

class GerudoTrainingItems extends Component {

    state = {
        open: false
    }

    componentDidMount() {
        const gerudoTrainingItemsData = JSON.parse(window.localStorage.getItem("gerudoTrainingItems"));
        this.setState(gerudoTrainingItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("gerudoTrainingItems", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;
        const { trainingKeysLogic } = this.props;

        return (
            <Modal
                trigger={<Button fluid content="Gerudo Training Grounds" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Gerudo Training Grounds Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <SmallKey 
                                trainingKeysLogic={trainingKeysLogic}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default GerudoTrainingItems;