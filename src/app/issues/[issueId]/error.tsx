"use client";

interface IssueErrorPageProps {
    error: {
        message: string
    }
}

export default function IssueErrorPage({ error }: IssueErrorPageProps) {
    return <p>{error.message}</p>
}