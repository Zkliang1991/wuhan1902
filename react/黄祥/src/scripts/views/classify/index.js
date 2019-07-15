import React from 'react';
import "./index.scss";
import axios from 'axios'
import { Head } from "@/scripts/components/head/index.js"

export class Classify extends React.Component {
    state = {
        typeOfMale: [],
        typeOfFemale: [],
    }
    componentWillMount() {
        axios.get('/cats/lv2').then(res => {
            this.setState({
                typeOfMale: res.data.male,
                typeOfFemale: res.data.female
            })
            console.log(res)
        })
    }
    gotomins(sex, maj) {
        this.props.history.push(`/classify/${maj}?${sex}`)
    }
    render() {
        return (
            <div>
                <Head title="分类"></Head>
                <div className="classbody">
                    <div className="maletype">
                        <h2>男生：</h2>
                        {
                            this.state.typeOfMale.map((item, i) => {
                                return (
                                    <div id={item.major} onClick={() => (this.gotomins("male", item.major))} key={i}>
                                        <p>{item.major}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="femaletype">
                        <h2>女生：</h2>
                        {
                            this.state.typeOfFemale.map((item, i) => {
                                return (
                                    <div id={item.major} onClick={() => (this.gotomins("female", item.major))} key={i}>
                                        <p>{item.major}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}