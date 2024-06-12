import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache";
import { SubmitButton } from "./submitButton";

export function IssueForm() {



  async function onsubmit(form: FormData) {
    'use server'
    await new Promise(resolve => setTimeout(resolve, 3000))
    const prisma = new PrismaClient();
    const issue = { title: form.get('title')!.toString(), summary: form.get('summary')!.toString(), description: form.get('description')!.toString()};
    await prisma.issue.create({data: issue})
    revalidatePath('/issues')
  }

  return (
    <div>
      <form action={onsubmit}>
      <input name='title' placeholder='title'/>
      <input name='summary' placeholder='summary'/>
      <input name='description' placeholder='description'/>
      <SubmitButton />
    </form>
    </div>
  );
}