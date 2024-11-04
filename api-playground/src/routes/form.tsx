import Button from "../components/Button";
import ResponseViewer from "../components/ResponseViewer";
import Input from "../components/Input";
import { Content, Container, Title, Text, OutputBox, output } from "./Home/styles"
import { SetStateAction, useState } from "react";
import locator from "../axios";
import { AxiosRequestConfig } from "axios";




const Form = () => {
    const [zipcode, setZipcode] = useState('');
    const [locationData, setLocationData] = useState({ message: "Enter zipcode and press convert" })

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setZipcode(event.target.value);
    };

    const submitZipcode = () => {
        const getLocation = async () => {
            try {
                let response = await locator.get(`/${zipcode}`);
                console.log(response.data);
                const { places } = response.data;
                const { "place name": city, state } = places[0]
                setLocationData({ city, state })
            } catch (error) {
                setLocationData({ message: "Error finding city. Check the zipcode" })
            }
        };
        getLocation();
    };


    return (
        <Container>
            <Title>Zip Code to City Converter</Title>
            <Text>Type in a zipcode to find what city it is in</Text>
            <Input label={"Zipcode"} onChange={handleInputChange} />
            <Button onClick={submitZipcode}>Convert Zipcode</Button>
            <OutputBox>
                <Text style={{ fontSize: '1.2rem' }}>{locationData.city ? `City: ${locationData.city}, ${locationData.state}` : locationData.message} </Text>
            </OutputBox>
            {/* <ResponseViewer src={locationData} /> */}
        </Container>
    );
};

export default Form;