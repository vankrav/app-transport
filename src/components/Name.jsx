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

const Name = ({ name }) => {
    return (
        <Card style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-success)"}}>
            <CardContent compact>
                <Cell
                    content={<TextBoxBigTitle>{name}</TextBoxBigTitle>}
                    contentRight={<IconArrowRight onClick={console.log("hi")} size="s" color="inherit" />}
                />
            </CardContent>
        </Card>

    );
};

export default Name;
