import NavBar from "@/components/nav";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col">
            <NavBar page={"about"} />
        </main>
    );
}
