import React from 'react';

const Pagination = () => {
    return (
        <nav className="flexbox mb-50">
            <a className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4" /> Newer</a>
            <a className="btn btn-white">Older
                <i className="ti-arrow-right fs-9 ml-4" />
            </a>
        </nav>

    )
}

export default Pagination;