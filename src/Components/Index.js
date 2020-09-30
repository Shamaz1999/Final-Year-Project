import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Details from './details'
import MyAds from './myAds'
import Post from './postAd'
import Chat from './chat';
import favAds from './favAds';
import editAd from './editAd';
import Content from './content'
export default class Index extends Component {
    render() {
        return (
            <Switch>
                <Route path='/home/myads/:adId/edit' component={editAd} />
                <Route path='/home/myads' component={MyAds} />
                <Route path='/home/favoriteAds' component={favAds} />
                <Route path='/home/postad' component={Post} />
                <Route path='/home/:sellerId/chat' component={Chat} />
                <Route path='/home/chat' component={Chat} />
                <Route path='/home/details/:userId' component={Details} />
                <Route path='/' component={Content} />
            </Switch>
        )
    }
}
