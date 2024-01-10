import React from 'react'
import styles from '../Error/Error.module.css'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

let cx = classNames.bind(styles)

function Error() {
    return (
        <section className={cx("page_404")}>

            <div className={cx("four_zero_four_bg")}>
                <h1 className="text-center">404</h1>

            </div>

            <div className={cx("contant_box_404")}>
                <h3 className="h2">
                    Look like you're lost
                </h3>

                <p>the page you are looking for not avaible!</p>

                <Link to={"/"} className={cx("link_404")}>Go to Home</Link>
            </div>
        </section>
    )
}

export default Error