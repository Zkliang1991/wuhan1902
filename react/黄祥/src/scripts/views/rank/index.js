import React from 'react';
import "./index.scss";
import { Head } from "@/scripts/components/head/index.js";
import { Ranktype } from "@/scripts/components/rank/index.js";
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

export class Rank extends React.Component {
    render() {
        const tabs = [
            { title: <Badge>男生</Badge> },
            { title: <Badge>女生</Badge> },
        ];
        return (
            <div>
                <Head title="排行榜"></Head>
                <div>
                    <Tabs tabs={tabs}
                        initialPage={0}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <Ranktype></Ranktype>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <Ranktype></Ranktype>
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
}