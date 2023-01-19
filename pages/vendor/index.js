import Link from "next/link";

function VendorOverview() {
    return (
        <div>
            <h1>VendorOverview</h1>
            <ul>
                <li><Link href="/vendor/BerryBox">BerryBox</Link></li>
            </ul>
        </div>
    )
}

export default VendorOverview