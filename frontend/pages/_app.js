import '../styles/globals.css';

import { createClient, Provider } from 'urql';

import Nav from '../components/Nav';

import { stateContext } from '../lib/context';

const client = createClient({
    url: 'http://localhost:1337/graphql',
    //url: process.env.NEXT_PUBLIC_BACKEND_API,
});

function MyApp({ Component, pageProps }) {
    return(
        <Provider value={client}>
            <Nav />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp;
