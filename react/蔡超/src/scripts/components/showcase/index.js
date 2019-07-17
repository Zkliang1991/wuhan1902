
import React, { Component } from 'react';

class ShowCase extends Component {
    render() {
        const {
            title,
            list,
            getNewList,
        } = this.props;
        return (
            <div
                style={{
                    marginTop: '3vw',
                    width: '100vw',
                    boxSizing: 'border-box',
                    padding: '0 3vw',
                    paddingBottom: '3vw'
                }}
            >
                <div style={{ borderBottom: '1px solid #dfdfdf', padding: '0 3vw', display: 'flex', lineHeight: '30px', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '0.44rem', fontWeight: '900' }}>{title}</div>
                    <div onClick={getNewList} style={{ fontSize: '0.33rem' }}>换一批</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', fontSize: '0.4rem' }}>
                    {
                        list && list.map((item, i) => {
                            return (
                                <div onClick={() => this.props.goSheet({ img: item.coverImgUrl, name: item.name, nickname: item.creator.nickname, playCount: item.playCount, tags: item.tags, nickImg: item.creator.avatarUrl, id: item.id })} key={i} style={{ width: '27vw', marginTop: '3vw', position: 'relative', animation: 'flipInY ' + 0.6 + 's' }}>
                                    <div style={{ width: '100%', height: '27vw', position: 'relative' }}>
                                        <img style={{ width: '100%', height: '100%' }} src={item.coverImgUrl ? item.coverImgUrl : "./img/demo.jpg"} alt="" ></img>
                                        <div style={{ width: '100%', position: 'absolute', bottom: 0, color: 'white', background: 'rgba(0,0,0,0.6)', fontSize: '0.3rem', padding: '0.1rem', boxSizing: 'border-box' }}>
                                            {item.creator.nickname}
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', whiteSpace: 'nowrap', overflowX: 'hidden', textOverflow: 'ellipsis', fontSize: '0.35rem' }}>
                                        {item.name}
                                    </div>
                                    <div style={{ position: 'absolute', right: '1vw', top: '1vw', color: 'white', fontSize: '0.2rem' }}>
                                        <span className='iconfont icon-ting'></span>
                                        {item.playCount}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}


export default ShowCase;