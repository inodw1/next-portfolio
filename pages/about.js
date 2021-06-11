import Link from "next/link"
import Layout from "../components/Layout"

export default  () => (
    <Layout title="About">
        <Link href="/">
            <a>Go to home</a>
        </Link>
        <p>A javascript programmer</p>
        <img src="/static/javascript-logo.png" alt="javascript" height="200px"/>
    </Layout>
)
