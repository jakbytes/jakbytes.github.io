import NavBar from "@/components/nav";
import Footer from "@/components/footer";

export default function Page() {
    return (
        <main className="flex flex-col min-h-screen bg-gray-100">
            <NavBar page={"about"} />
            <header className="bg-white py-8 px-6 shadow-md">
                <h1 className="text-3xl font-semibold">Privacy Policy</h1>
                <p className="mt-2 text-gray-600">
                    {`This privacy policy applies to the VisiPuzzle app (hereby referred to as "Application") for devices
                    that was created by jakbytes (hereby referred to as "Service Provider") as a Commercial service.
                    This service is intended for use "AS IS".`}
                </p>
            </header>

            <section className="p-6">
                <h2 className="text-2xl font-semibold">Information Collection and Use</h2>
                <p className="mt-2 text-gray-600">
                    The Application collects information when you download and use it. This information may include:
                </p>
                <ul className="list-disc pl-8 mt-2 text-gray-600">
                    <li>{`Your device's Internet Protocol address (e.g. IP address)`}</li>
                    <li>The pages of the Application that you visit, the time and date of your visit, the time spent on
                        those pages
                    </li>
                    <li>The time spent on the Application</li>
                    <li>The operating system you use on your device</li>
                </ul>
                <p className="mt-2 text-gray-600">
                    The Application does not gather precise information about the location of your device.
                </p>
                <p className="mt-2 text-gray-600">
                    The Service Provider may use the information you provided to contact you from time to time to provide
                    you with important information, required notices and marketing promotions.
                </p>
            </section>

            <section className="p-6 bg-white mt-4">
                <h2 className="text-2xl font-semibold">Third Party Access</h2>
                <p className="mt-2 text-gray-600">
                    Only aggregated, anonymized data is periodically transmitted to external services to aid the Service
                    Provider in improving the Application and their service. The Service Provider may share your
                    information with third parties in the ways that are described in this privacy statement.
                </p>
                <ul className="list-disc pl-8 mt-2 text-gray-600">
                    <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                    <li>when they believe in good faith that disclosure is necessary to protect their rights, protect
                        your safety or the safety of others, investigate fraud, or respond to a government request;
                    </li>
                    <li>with their trusted services providers who work on their behalf, do not have an independent use
                        of the information we disclose to them, and have agreed to adhere to the rules set forth in this
                        privacy statement.
                    </li>
                </ul>
            </section>

            <section className="p-6 mt-4">
                <h2 className="text-2xl font-semibold">Opt-Out Rights</h2>
                <p className="mt-2 text-gray-600">
                    You can stop all collection of information by the Application easily by uninstalling it. You may use
                    the standard uninstall processes as may be available as part of your device or via the
                    application marketplace or network.
                </p>
            </section>

            <section className="p-6 bg-white mt-4">
                <h2 className="text-2xl font-semibold">Data Retention Policy</h2>
                <p className="mt-2 text-gray-600">
                    The Service Provider will retain User Provided data for as long as you use the Application and for a
                    reasonable time thereafter. If you would like them to delete User Provided Data that you have provided
                    via the Application, please contact them at <a href="mailto:admin@jakbytes.com" className="text-blue-500 hover:underline">admin@jakbytes.com</a> and they will respond in a reasonable
                    time.
                </p>
            </section>

            <section className="p-6 mt-4">
                <h2 className="text-2xl font-semibold">Children</h2>
                <p className="mt-2 text-gray-600">
                    The Service Provider does not use the Application to knowingly solicit data from or market to
                    children under the age of 13.
                </p>
                <p className="mt-2 text-gray-600">
                    {`The Service Provider does not knowingly collect personally identifiable information from children.
                    The Service Provider encourages all children to never submit any personally identifiable information
                    through the Application and/or Services. The Service Provider encourage parents and legal guardians
                    to monitor their children's Internet usage and to help enforce this Policy by instructing their
                    children never to provide personally identifiable information through the Application and/or
                    Services without their permission. If you have reason to believe that a child has provided
                    personally identifiable information to the Service Provider through the Application and/or Services,
                    please contact the Service Provider (admin@jakbytes.com) so that they will be able to take the
                    necessary actions. You must also be at least 16 years of age to consent to the processing of your
                    personally identifiable information in your country (in some countries we may allow your parent or
                    guardian to do so on your behalf).`}
                </p>
            </section>

            <section className="p-6 bg-white mt-4">
                <h2 className="text-2xl font-semibold">Security</h2>
                <p className="mt-2 text-gray-600">
                    The Service Provider is concerned about safeguarding the confidentiality of your information. The
                    Service Provider provides physical, electronic, and procedural safeguards to protect information the
                    Service Provider processes and maintains.
                </p>
            </section>

            <section className="p-6 mt-4">
                <h2 className="text-2xl font-semibold">Changes</h2>
                <p className="mt-2 text-gray-600">
                    This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify
                    you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are
                    advised to consult this Privacy Policy regularly for any changes, as continued use is deemed
                    approval of all changes.
                </p>
                <p className="mt-2 text-gray-600">
                    This privacy policy is effective as of 2024-06-23
                </p>
            </section>

            <section className="p-6 bg-white mt-4">
                <h2 className="text-2xl font-semibold">Your Consent</h2>
                <p className="mt-2 text-gray-600">
                    By using the Application, you are consenting to the processing of your information as set forth in
                    this Privacy Policy now and as amended by us.
                </p>
            </section>

            <section className="p-6 mt-4">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="mt-2 text-gray-600">
                    If you have any questions regarding privacy while using the Application, or have questions about the
                    practices, please contact the Service Provider via email at <a
                    href="mailto:admin@jakbytes.com" className="text-blue-500 hover:underline">admin@jakbytes.com</a>.
                </p>
            </section>
            <Footer />
        </main>
    );
}
