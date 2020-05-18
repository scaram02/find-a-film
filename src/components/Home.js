import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Find a Film</h1>
                <p>Some sort of description about how it works</p>
                <a href='/signup'>Sign up</a>
                <a href="/login">Log in</a>
            </div>
        )
    }
}
