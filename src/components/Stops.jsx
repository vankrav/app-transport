import React from "react";
import {MarkedList, MarkedItem, IconDone, Card, Image} from "@salutejs/plasma-ui";
import {
    CardContent,
    Cell, CellDisclosure,
    CellIcon,
    CellListItem,
    TextBox,
    TextBoxBigTitle, TextBoxSubTitle,
    TextBoxTitle
} from "@sberdevices/plasma-ui";
import {IconArrowLeft, IconArrowRight, IconLocation, IconLocationFill} from "@salutejs/plasma-icons";


export class Stops extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor stops');
        console.log();

        this.state = {}
    }
        render(props)
        {
            return (
                <>
                    <Card style={{marginBottom: 15}}>
                        <CardContent compact>
                            <Cell
                                content={<TextBoxBigTitle>Остановки</TextBoxBigTitle>}
                                contentRight={<span style={{marginTop: 5}}>{props}</span>}
                            />
                            {/*{props.stops.map((stop, index) => (*/}
                            {/*    // <li key={index}>{stop}</li>*/}
                            {/*    <CellListItem*/}
                            {/*        contentLeft={*/}
                            {/*            <CellIcon>*/}
                            {/*                <IconLocation size="s" color="inherit" />*/}
                            {/*            </CellIcon>*/}
                            {/*        }*/}
                            {/*        content={*/}
                            {/*            <TextBox>*/}
                            {/*                <TextBoxTitle>{stop}</TextBoxTitle>*/}
                            {/*            </TextBox>*/}
                            {/*        }*/}
                            {/*        contentRight={<CellDisclosure />}*/}
                            {/*    />*/}
                            {/*))}*/}
                            {console.log(props)}


                        </CardContent>
                    </Card>
                </>
            )
        }

    }

export default Stops;
