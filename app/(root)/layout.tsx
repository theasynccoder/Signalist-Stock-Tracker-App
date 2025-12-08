import Header from "@/components/Header"

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
      <main className="min-h-screen text-gray-400">
        {/* {Header} */}
        <Header />
        <div className="container py-10">
            {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
