import '../styles/globals.css';
import { createClient, Provider } from 'urql';

const client = createClient({
    url: 'http://localhost:1337/graphql',
    //url: process.env.NEXT_PUBLIC_BACKEND_API,
});

function MyApp({ Component, pageProps }) {
    return(
        <Provider value={client}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp;
