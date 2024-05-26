import { IssueForm } from "@/components/issue/IssueForm";
import { Issue } from "@prisma/client";

export default function FormIssuePage() {

  async function createIssue(formData: Issue) {
    'use server'
    console.log(formData);
  }

    return (
      <>
        <IssueForm createIssue={createIssue}/>
      </>
    )
  }
  