import { Link } from "react-router-dom"
import React from "react"

const NotFoundPage = () => {
	return (
		<div className="loading">
			<h1>404 Page Not Found!</h1>
			<div id="logo-name">
				<b>Quiz</b>App
			</div>
			<h3>
				Sorry, I think you've entered the wrong URL. <Link to="/">Click here</Link> to
				go back to the Dashboard.
			</h3>
		</div>
	)
}

export default NotFoundPage
