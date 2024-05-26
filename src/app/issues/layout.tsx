import { IssuesList } from "@/components/issue/IssueList";
import { PrismaClient } from "@prisma/client";
import classes from './layout.module.css';
import Link from "next/link";

export default async  function IssueLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const prisma = new PrismaClient();
    const issues = await prisma.issue.findMany();
    return <div className={classes.layout}>
        <aside className={classes.sidebar}>
            <Link href={`/issues/form`}>
                <button>New Issue</button>
            </Link>
            <IssuesList issues={issues} />
        </aside>
        {children}
    </div>
}