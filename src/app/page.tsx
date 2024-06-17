import NavBar from "@/components/nav";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <NavBar page={"home"} />
            <div className="flex min-h-fit flex-col items-center justify-between p-24">
            </div>
            <Footer />
        </main>
  );
}
