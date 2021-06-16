import Layout from "../components/Layout"
import { withRouter } from "next/router"

/**
 * url is deprecated
 * Since Next 5  they provide a way to explicitly inject the Next.js router object into pages and all their components
 * The router property that is injected will hold the same value as url, like pathname, asPath, and query
 * @param {*} param0 
 * @returns 
 */
const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: "80vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Layout>
)

export default withRouter(Post)
