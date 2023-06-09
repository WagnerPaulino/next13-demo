import { Issue } from "@prisma/client"
import classes from './IssueDetails.module.css';

interface IssueDetailsProps {
    issue: Issue
}

export default function IssueDetail({ issue }: IssueDetailsProps) {
    return (
        <article className={classes.details}>
            <header>
                <h1>{issue.title}</h1>
                <p>{issue.summary}</p>
            </header>
            <p>{issue.description}</p>
        </article>
    );
}