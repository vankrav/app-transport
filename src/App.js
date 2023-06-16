
import React  from 'react';
import './App.css';
import axios from 'axios';
//import data from './route_info.json';
import RoutePage from "./pages/RoutePage";
import StopPage from "./pages/StopPage";
import {
    createSmartappDebugger,
    createAssistantsendData, createAssistant
} from "@salutejs/client";

import {reducer} from "./store.ts"
import {Input} from "./components/Input";
import SearchPage from "./pages/StartPage";
import {Sheet} from "@sberdevices/plasma-ui";
import StartPage from "./pages/StartPage";
import PropTypes from 'prop-types';




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
            stops0: [],
            stops1: [],
            page: 'start',
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
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        console.log(event.keyCode)
        if (event.keyCode === 37 || event.keyCode === "Back" || event.keyCode === 4) {
            this.goBack();
            console.log("back")
        }
    };

    goBack = (action) => {
        this._send_action_value("start", "ок", "")
        this.setState({page:"start"})
    }

    getStateForAssistant () {
        console.log('getStateForAssistant: this.state:', this.state)
        const state = {
            short_name : "",
            long_name :"",
            reverse : true,
            stops0: [],
            stops1: [],
            error:""

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
                case "rotate":
                    return this.rotate(action);


                default:
                    throw new Error();
            }
        }
    }
    async get_route(action) {
        console.log('get_route', action);
        try {
            const response = await axios.get("https://mostrans-salute.vercel.app/schedule/route_info?short_name=" + action.short_name);
            const data = response.data;
            //const stopNames = data.stops_data_0.map((item) => item.stop_name);
            console.log(data);

            this.setState({
                short_name: action.short_name,
                long_name: data.long_route_name,
                reverse: true,
                stops0: data.stops_data_0 ,
                stops1: data.stops_data_1,
                page:"route",
                error:""
            });

            //this._send_action_value('маршрут', "ок");

            //const stopNames = data.stops_data_0.map((item) => item.stop_name);
        } catch (error) {
            console.error('Ошибка при получении остановок', error);
            this.setState({ error:"Ошибка на сервере. \nСкоро починим" });
        }

    }
    rotate = (action) => {
        this.setState({ reverse: !this.state.reverse})
        //this._send_action_value('реверс', "ок");
        return !this.state.reverse
    }
    _send_action_value = (action_id, value, route) =>{
        const data = {
            action: {
                action_id: action_id,
                parameters: {   // значение поля parameters может любым, но должно соответствовать серверной логике
                    value: value, // см.файл src/sc/noteDone.sc смартаппа в Studio Code
                    route: route, //
                }
            }
        };
        const unsubscribe = this.assistant.sendData(
            data,
            (data) => {   // функция, вызываемая, если на sendData() был отправлен ответ
                const {type, payload} = data;
                console.log('sendData onData:', type, payload);
                unsubscribe();
            });
    }






    render() {
        console.log('render');
        console.log('!!!!!!!!!!');
        //console.log(this.state.stops)
        console.log(this.getStateForAssistant());



        return (
            <div style={{ outline: 'none'}}>

                {this.state.page =="start" && <StartPage  error = {this.state.error}/> }
                {this.state.page =="route" && <RoutePage send = {this._send_action_value} goBack = {this.goBack} rotate = {this.rotate} data = {this.state}/>}




            </div>

        )
    }

}
export default App;
