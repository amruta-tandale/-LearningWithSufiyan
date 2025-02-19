import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Recent ABout",
    },
}

//this does not work as we have static metadata object

export default function AboutPage() {
    return (
        <div>
        <h1>About Page</h1>
        </div>
    );
}