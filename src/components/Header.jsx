const Header = (props) => {
    return (
        <header id='header' style={{ height: '100dvh' }}>
            <div className='intro'>
                <div className='overlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-md-offset-3 intro-text'>
                                <h1>
                                    {props.data ? props.data.title : 'Loading...'}
                                    <span></span>
                                </h1>
                                <p>{props.data ? props.data.paragraph : 'Loading...'}</p>
                                <a
                                    href='#features'
                                    className='btn btn-custom btn-lg page-scroll'

                                >
                                    {`Learn More`}
                                </a>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;