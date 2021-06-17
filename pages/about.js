import Link from "next/link"
import Layout from "../components/Layout"
import fetch from "isomorphic-unfetch"
import Error from "./_error"
import { Component } from "react"

export default class About extends Component {
    /*
    state = {
        user: null
    }
    */

    /*
    static getInitialProps() {
        fetch("https://api.github.com/users/inodw1")
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        return { user: "user" }
    }
    */

    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/inodw1")
        const statusCode = res.status > 200 ? res.status : false
        const data = await res.json()
        return { user: data, statusCode }
    }

    /*
    componentDidMount() {
        fetch("https://api.github.com/users/inodw1")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    user: data
                })
            })
    }
    */

    render() {
        const { user, statusCode } = this.props
        if(statusCode) return <Error statusCode={statusCode} />
        return (
            <Layout title="About">
                {/* {JSON.stringify(this.state.user)} */}
                {/* {JSON.stringify(this.props.user)} */}
                {/* <Link href="/">
                    <a>Go to home</a>
                </Link> */}
                <p>{user.name}</p>
                <p>{user.bio}</p>
                <img
                    // src="/static/javascript-logo.png"
                    src={user.avatar_url}
                    alt="inod"
                    height="200px"
                />
            </Layout>
        )
    }
}
