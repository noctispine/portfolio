import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Eren Çam</title>
      <div className="grid grid-cols-12 gap-5 px-5 h-80vh lg:my-24 lg:px-40 sm:px-20 md:px-70">
        <div className="col-span-12 text-center  bg-opacity-90 backdrop-blur-lg bg-gray-card xl:col-span-3 rounded-2xl shadow-card">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 text-center bg-gray-card xl:col-span-9 rounded-2xl shadow-card h-80vh">
          <Navbar />

          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
