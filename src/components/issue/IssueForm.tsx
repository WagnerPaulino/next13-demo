'use client'

import { Issue } from "@prisma/client"

export function IssueForm(props: { createIssue: (formData: Issue) => void }) {

  const onsubmit = (form: FormData) => {
    const issue = { title: form.get('title')!.toString(), summary: form.get('summary')!.toString(), description: form.get('description')!.toString()};
    props.createIssue(issue as Issue);
  }

  return (
    <div>
      <form action={onsubmit}>
      <input name='title' placeholder='title'/>
      <input name='summary' placeholder='summary'/>
      <input name='description' placeholder='description'/>
      <button type="submit">save</button>
    </form>
    </div>
  );
}