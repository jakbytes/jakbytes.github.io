import NavBar from "@/components/nav";
import Footer from "@/components/footer";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <NavBar page={"about"} />
            <Footer />
        </main>
    );
}
