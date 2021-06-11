import Link from "next/link"

export default  () => (
    <div>
        <h1>About</h1>
        <Link href="/">
            <a>Go to home</a>
        </Link>
        <p>A javascript programmer</p>
        <img src="/static/javascript-logo.png" alt="javascript" height="200px"/>
    </div>
)
