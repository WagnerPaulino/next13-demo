import IssueDetail from "@/components/issue/IssueDetails";
import { PrismaClient } from "@prisma/client";

interface IssueDetailsPageProps {
    params: {
        issueId: string;
    }
}

export default async function IssueDetailsPage({ params }: IssueDetailsPageProps) {
    const prisma = new PrismaClient();
    const issue = await prisma.issue.findFirst({ where: { id: +params.issueId } })
    await new Promise((resolve, _reject) => setTimeout(resolve, 3 * 1000))
    if (issue) {
        return (
            <>
                <IssueDetail issue={issue}></IssueDetail>
            </>
        )
    } else {
        throw new Error('Issue not found!')
    }
}
