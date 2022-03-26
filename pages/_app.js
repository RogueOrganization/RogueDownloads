import '../styles/globals.css'

function MyApp({ Component, pageProps })
{
  return <>
    <nav>test</nav>
    <Component {...pageProps} />
    <footer>test</footer>
  </>
}

export default MyApp
