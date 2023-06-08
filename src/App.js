
import React from 'react';
import './App.css';
import axios from 'axios';
//import data from './route_info.json';
import RoutePage from "./pages/RoutePage";
import StopPage from "./pages/StopPage";
import {
    createSmartappDebugger,
    createAssistant,
} from "@salutejs/client";

import {reducer} from "./store.ts"
import {Input} from "./components/Input";



const initializeAssistant = (getState) => {
    if (process.env.NODE_ENV === "development") {
        return createSmartappDebugger({
            token: process.env.REACT_APP_TOKEN ?? "",
            initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
            getState,
        });
    }
    return createAssistant({ getState });
};



export class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor');

        this.state = {
            short_name : "",
            long_name :"",
            reverse : false,
            stops: []
        };

        this.assistant = initializeAssistant(() => this.getStateForAssistant() );
        this.assistant.on("data", (event/*: any*/) => {
            console.log(`assistant.on(data)`, event);
            const { action } = event
            this.dispatchAssistantAction(action);
        });
        this.assistant.on("start", (event) => {
            console.log(`assistant.on(start)`, event);
        });

    }



    componentDidMount() {
        console.log('componentDidMount');
    }

    getStateForAssistant () {
        console.log('getStateForAssistant: this.state:', this.state)
        const state = {
                        short_name : "",
                        long_name :"",
                        reverse : false,
                        stops: []
        };
        console.log('getStateForAssistant: state:', state)
        return state;
    }

    dispatchAssistantAction (action) {
        console.log('dispatchAssistantAction', action);
        if (action) {
            switch (action.type) {
                case 'get_route':
                    return this.get_route(action);


                default:
                    throw new Error();
            }
        }
    }
    get_route = async (action) => {
        console.log('get_route', action);
        try {
            const response = await axios.get("https://mostrans-salute.vercel.app/schedule/route_info?short_name=" + action.short_name);
            const data = response.data;
            //const stopNames = data.stops_data_0.map((item) => item.stop_name);
            console.log(data.stops_data_0);
            this.setState({
                short_name: action.short_name,
                long_name: data.long_route_name,
                reverse: false,
                stops: data.stops_data_0
            });
            //const stopNames = data.stops_data_0.map((item) => item.stop_name);
        } catch (error) {
            console.error('Ошибка при получении остановок', error);
            // this.setState({ stops: [] });
        }

    }






    render() {
        console.log('render');
        console.log('!!!!!!!!!!');
        //console.log(this.state.stops)
        console.log(this.getStateForAssistant());


  return (
      <>
          {}
        <RoutePage data = {this.state}/>
          {}
        {/*routes = {this.state.routes}*/}
        {/*getRoute = {(route) => { this.get_route({ type: "get_route", route }); }}*/}
        {/*/>*/}

        {/*<StopPage name = {"Театральная площадь"} routes={[1,2,3,4,5,6]}/>*/}
        {/*/!*<SearchPage/>*!/*/}
      </>

    )
    }

}
export default App;
