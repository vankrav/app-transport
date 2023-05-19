import {Container, TextBox} from "@sberdevices/plasma-ui";
import {
    Button,
    Card,
    CardBody,
    CardContent, CardMedia,
    CardParagraph1,
    Header,
    TextBoxBigTitle,
    TextBoxSubTitle
} from "@salutejs/plasma-ui";
import Stops from "../components/Stops";
import Name from "../components/Name";
import Input from "../components/Input";


function SearchPage(props) {

    return (
        <Container style={{ width: '70%', minWidth: "350px"}}>
            <Header title = "Расписание транспорта"/>
            <Input/>
            <Card >
                <CardBody>
                    <CardMedia
                        src="/ui/images/320_320_2.jpg"
                        placeholder="/ui/images/320_320_3.jpg"
                        ratio="1 / 1"
                    />
                    <CardContent cover>
                        <TextBox>
                            <TextBoxBigTitle>Киану Ривз</TextBoxBigTitle>
                            <TextBoxSubTitle>Актёр</TextBoxSubTitle>
                            <CardParagraph1 mt="6x" lines={4}>
                                Канадский актёр, кинопродюсер, и музыкант.
                            </CardParagraph1>
                            <TextBoxSubTitle>ru.wikipedia.org</TextBoxSubTitle>
                        </TextBox>
                    </CardContent>
                </CardBody>
            </Card>
        </Container>
    );
}

export default SearchPage;