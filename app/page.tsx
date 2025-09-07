
import Sidebar from "./components/sidebar/Sidebar";
import Postfeed from "./components/postfeed/Postfeed";
import Widgets from "./components/widgets/Widgets";
import SignUpPrompt from "./components/SignUpPrompt/SignUpPrompt";

export default function Home() {
  return (
    <>
      <div
        className="text-[#0F1419] min-h-screen 
    max-w-[1400px] mx-auto flex justify-center  "
      >
        <Sidebar />
        <Postfeed />
        <Widgets />
      </ div>
      <SignUpPrompt />
    </>
  );
}
