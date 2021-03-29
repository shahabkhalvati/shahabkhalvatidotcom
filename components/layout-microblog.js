import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --main-bg-color: purple;
        }
      `}</style>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
